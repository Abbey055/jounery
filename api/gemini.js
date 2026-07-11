const DEFAULT_MODEL = "gemini-2.5-flash";
const MAX_MESSAGE_LENGTH = 1200;
const MAX_HISTORY_ITEMS = 8;

const portfolioContext = `
You are SsenksTech, the virtual assistant for Ssenkubuge Abbey's portfolio website.

Ssenkubuge Abbey is an IT Specialist and Software Developer based in Mbarara, Uganda.
He builds web platforms, Android apps, custom software systems, AI integrations, automation,
databases, APIs, e-commerce solutions, e-voting systems, and practical digital products.

Featured work includes DevFollow, CivicWatch, Python Bootcamp, Kabambaija Website,
Zalseef Estates Website, Makerere University Education Students E-Voting System 2026,
and EGarage Mobile Application.

Contact details:
Email: ssenkubugeabbey055@gmail.com
Phone: +256 705 149 399

Answer general questions helpfully and clearly. When users ask about hiring, pricing,
consultations, or building a product, collect their name, email, phone, and project description,
then encourage them to contact Abbey directly. Keep replies concise and friendly.
`;

const sendJson = (response, statusCode, payload) => {
    response.statusCode = statusCode;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(payload));
};

const parseBody = async (request) => {
    if (request.body && typeof request.body === "object") {
        return request.body;
    }

    const chunks = [];

    for await (const chunk of request) {
        chunks.push(chunk);
    }

    if (!chunks.length) {
        return {};
    }

    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
};

const toSafeText = (value, limit = MAX_MESSAGE_LENGTH) => {
    if (typeof value !== "string") {
        return "";
    }

    return value.replace(/\s+/g, " ").trim().slice(0, limit);
};

const buildPrompt = (message, history) => {
    const safeHistory = Array.isArray(history)
        ? history
            .slice(-MAX_HISTORY_ITEMS)
            .map((item) => {
                const role = item && item.role === "assistant" ? "Assistant" : "User";
                const text = toSafeText(item && item.text, 600);
                return text ? `${role}: ${text}` : "";
            })
            .filter(Boolean)
            .join("\n")
        : "";

    return `${portfolioContext}

Recent conversation:
${safeHistory || "No earlier messages."}

User: ${message}
SsenksTech:`;
};

const extractGeminiText = (data) => {
    const parts = data && data.candidates && data.candidates[0]
        && data.candidates[0].content && data.candidates[0].content.parts;

    if (!Array.isArray(parts)) {
        return "";
    }

    return parts
        .map((part) => (part && typeof part.text === "string" ? part.text : ""))
        .join("")
        .trim();
};

module.exports = async (request, response) => {
    response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (request.method === "OPTIONS") {
        response.statusCode = 204;
        response.end();
        return;
    }

    if (request.method !== "POST") {
        sendJson(response, 405, { error: "Method not allowed" });
        return;
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    if (!apiKey) {
        console.error("Missing GEMINI_API_KEY environment variable");
        sendJson(response, 500, { error: "Assistant is temporarily unavailable" });
        return;
    }

    try {
        const body = await parseBody(request);
        const message = toSafeText(body.message);

        if (!message) {
            sendJson(response, 400, { error: "Message is required" });
            return;
        }

        const model = toSafeText(process.env.GEMINI_MODEL, 80) || DEFAULT_MODEL;
        const geminiResponse = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": apiKey
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: buildPrompt(message, body.history)
                                }
                            ]
                        }
                    ],
                    generationConfig: {
                        maxOutputTokens: 420,
                        temperature: 0.65
                    }
                })
            }
        );

        const data = await geminiResponse.json();

        if (!geminiResponse.ok) {
            console.error("Gemini request failed", data.error || data);
            sendJson(response, geminiResponse.status, {
                error: "Assistant is temporarily unavailable"
            });
            return;
        }

        const reply = extractGeminiText(data);

        if (!reply) {
            console.error("Gemini returned an empty response");
            sendJson(response, 502, { error: "Assistant is temporarily unavailable" });
            return;
        }

        sendJson(response, 200, { reply });
    } catch (error) {
        console.error(error);
        sendJson(response, 500, {
            error: "Assistant is temporarily unavailable"
        });
    }
};
