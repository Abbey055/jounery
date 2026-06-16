document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");
    const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
    const revealItems = document.querySelectorAll("[data-reveal]");
    const skillBars = document.querySelectorAll(".skill-fill");
    const skillSection = document.getElementById("skills");
    const yearNode = document.querySelector("[data-year]");
    const chatWidget = document.querySelector("[data-ai-chat]");

    const closeMenu = () => {
        if (!menuToggle || !siteNav) {
            return;
        }

        menuToggle.classList.remove("is-open");
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    };

    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = !siteNav.classList.contains("is-open");
            menuToggle.classList.toggle("is-open", isOpen);
            siteNav.classList.toggle("is-open", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", (event) => {
            if (!siteNav.classList.contains("is-open")) {
                return;
            }

            const target = event.target;
            if (target instanceof Node && !siteNav.contains(target) && !menuToggle.contains(target)) {
                closeMenu();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 960) {
                closeMenu();
            }
        });
    }

    const setActiveLink = (sectionId) => {
        navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${sectionId}`);
        });
    };

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, {
            rootMargin: "-45% 0px -45% 0px",
            threshold: 0
        });

        navLinks.forEach((link) => {
            const targetId = link.getAttribute("href");
            if (!targetId) {
                return;
            }

            const section = document.querySelector(targetId);
            if (section) {
                sectionObserver.observe(section);
            }
        });

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.18
        });

        revealItems.forEach((item) => {
            revealObserver.observe(item);
        });

        if (skillSection) {
            const skillObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    skillBars.forEach((bar) => {
                        const level = bar.getAttribute("data-level") || "0";
                        bar.style.width = `${level}%`;
                    });

                    observer.unobserve(entry.target);
                });
            }, {
                threshold: 0.3
            });

            skillObserver.observe(skillSection);
        }
    } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        skillBars.forEach((bar) => {
            const level = bar.getAttribute("data-level") || "0";
            bar.style.width = `${level}%`;
        });
    }

    const initSsenksTechChat = () => {
        if (!chatWidget) {
            return;
        }

        const toggle = chatWidget.querySelector(".ai-chat-toggle");
        const panel = chatWidget.querySelector(".ai-chat-panel");
        const closeButton = chatWidget.querySelector(".ai-chat-close");
        const frame = chatWidget.querySelector("[data-ai-chat-frame]");
        const localChat = chatWidget.querySelector("[data-ai-chat-local]");
        const messages = chatWidget.querySelector("[data-ai-chat-messages]");
        const form = chatWidget.querySelector("[data-ai-chat-form]");
        const input = chatWidget.querySelector("[data-ai-chat-input]");
        const suggestionButtons = chatWidget.querySelectorAll("[data-ai-suggestion]");
        const geminiEndpoint = (chatWidget.getAttribute("data-gemini-endpoint") || "/api/gemini").trim();
        const zapierChatUrl = (chatWidget.getAttribute("data-zapier-chat-url") || "").trim();
        let hasLoadedEmbed = false;
        let awaitingProjectDetails = false;
        let isSending = false;
        const conversation = [];

        if (!toggle || !panel) {
            return;
        }

        const contactLine = "Email: ssenkubugeabbey055@gmail.com\nPhone: +256 705 149 399";
        const closingLine = "Feel free to contact Ssenkubuge Abbey for consultations, partnerships, software development services, and digital innovation projects.";

        const services = [
            "Website Development",
            "Mobile Application Development",
            "Custom Software Development",
            "E-Commerce Solutions",
            "AI Integration",
            "Automation Solutions",
            "Database Design",
            "API Development",
            "E-Voting Systems",
            "IT Consultancy",
            "Technical Support"
        ];

        const projects = [
            "Kabambaija Website",
            "Zalseef Estates Website",
            "Makerere University Education Students E-Voting System 2026",
            "DevFollow System",
            "EGarage Mobile Application",
            "CivicWatch Community App",
            "Various web applications and software systems"
        ];

        const loadZapierEmbed = () => {
            if (!zapierChatUrl || !frame || hasLoadedEmbed) {
                return;
            }

            frame.setAttribute("src", zapierChatUrl);
            hasLoadedEmbed = true;
        };

        const openChat = () => {
            panel.hidden = false;
            chatWidget.classList.add("is-open");
            toggle.setAttribute("aria-expanded", "true");
            loadZapierEmbed();

            if (!zapierChatUrl && input instanceof HTMLInputElement) {
                window.setTimeout(() => input.focus(), 80);
            }
        };

        const closeChat = () => {
            panel.hidden = true;
            chatWidget.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.focus();
        };

        const addMessage = (text, sender = "bot") => {
            if (!messages) {
                return null;
            }

            const message = document.createElement("p");
            message.className = `ai-chat-message is-${sender}`;
            message.textContent = text;
            messages.appendChild(message);
            messages.scrollTop = messages.scrollHeight;
            return message;
        };

        const setInputState = (disabled) => {
            isSending = disabled;

            if (input instanceof HTMLInputElement) {
                input.disabled = disabled;
            }

            if (form instanceof HTMLFormElement) {
                const sendButton = form.querySelector("button");

                if (sendButton instanceof HTMLButtonElement) {
                    sendButton.disabled = disabled;
                }
            }
        };

        const hasAny = (text, words) => words.some((word) => text.includes(word));

        const buildReply = (rawMessage) => {
            const message = rawMessage.trim();
            const text = message.toLowerCase();

            if (awaitingProjectDetails && (message.length > 18 || text.includes("@"))) {
                awaitingProjectDetails = false;
                return `Thank you. Here is the request summary I captured:\n${message}\n\nAbbey should confirm the scope, timeline, and budget directly.\n${contactLine}\n\n${closingLine}`;
            }

            const projectHelpWords = [
                "build",
                "create",
                "develop",
                "need",
                "want",
                "hire",
                "quote",
                "cost",
                "price",
                "consult",
                "request"
            ];
            const serviceWords = [
                "website",
                "web site",
                "mobile app",
                "app",
                "software",
                "system",
                "ai",
                "automation",
                "e-commerce",
                "ecommerce",
                "database",
                "api",
                "consultation"
            ];

            if (hasAny(text, projectHelpWords) && hasAny(text, serviceWords)) {
                awaitingProjectDetails = true;
                return `I can help collect the project details for Abbey. Please send:\nFull Name\nEmail Address\nPhone Number\nProject Description\n\nAfter that, I will summarize the request and recommend contacting Abbey directly.\n${contactLine}`;
            }

            if (hasAny(text, ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"])) {
                return "Hello, I am SsenksTech, the virtual assistant for Ssenkubuge Abbey. You can ask about Abbey's services, projects, skills, education, or how to start a project.";
            }

            if (hasAny(text, ["service", "offer", "do you do", "what can", "solutions"])) {
                return `Abbey offers:\n${services.map((service) => `- ${service}`).join("\n")}\n\n${closingLine}`;
            }

            if (hasAny(text, ["project", "portfolio", "work", "built", "showcase"])) {
                return `Some of Abbey's listed projects include:\n${projects.map((project) => `- ${project}`).join("\n")}\n\n${closingLine}`;
            }

            if (hasAny(text, ["skill", "technology", "developer", "specialist", "experience", "profession"])) {
                return `Ssenkubuge Abbey is an IT Specialist, Software Developer, Web Developer, Mobile App Developer, and Technology Innovator. He works across web development, mobile apps, software systems, AI integration, automation, databases, and APIs.\n\n${closingLine}`;
            }

            if (hasAny(text, ["education", "degree", "university", "must", "mbarara"])) {
                return `Abbey holds a Bachelor of Information Technology from Mbarara University of Science and Technology (MUST).\n\n${closingLine}`;
            }

            if (hasAny(text, ["contact", "email", "phone", "call", "reach", "whatsapp"])) {
                return `You can contact Ssenkubuge Abbey directly:\n${contactLine}\n\n${closingLine}`;
            }

            return `I can help with professional information about Ssenkubuge Abbey's services, skills, projects, education, and consultation requests. For project work, please share your full name, email address, phone number, and project description.\n\n${closingLine}`;
        };

        const canUseGemini = () => Boolean(geminiEndpoint) && window.location.protocol !== "file:";

        const askGemini = async (message) => {
            if (!canUseGemini()) {
                throw new Error("Gemini endpoint is unavailable on this page.");
            }

            const response = await fetch(geminiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message,
                    history: conversation.slice(-8)
                })
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok || !data.reply) {
                throw new Error(data.error || "Gemini request failed.");
            }

            return data.reply;
        };

        const answerMessage = async (value) => {
            addMessage(value, "user");
            conversation.push({ role: "user", text: value });

            const thinkingMessage = addMessage("Thinking...", "bot");
            setInputState(true);

            try {
                const reply = await askGemini(value);

                if (thinkingMessage) {
                    thinkingMessage.textContent = reply;
                } else {
                    addMessage(reply);
                }

                conversation.push({ role: "assistant", text: reply });
            } catch (error) {
                const reply = buildReply(value);

                if (thinkingMessage) {
                    thinkingMessage.textContent = reply;
                } else {
                    addMessage(reply);
                }

                conversation.push({ role: "assistant", text: reply });
            } finally {
                setInputState(false);

                if (input instanceof HTMLInputElement) {
                    input.focus();
                }
            }
        };

        toggle.addEventListener("click", () => {
            if (panel.hidden) {
                openChat();
            } else {
                closeChat();
            }
        });

        if (closeButton) {
            closeButton.addEventListener("click", closeChat);
        }

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !panel.hidden) {
                closeChat();
            }
        });

        if (zapierChatUrl && frame instanceof HTMLIFrameElement && localChat instanceof HTMLElement) {
            localChat.hidden = true;
            frame.hidden = false;
            chatWidget.classList.add("has-zapier-embed");
            return;
        }

        addMessage("Hello, I am SsenksTech. Ask me about Abbey's services, projects, skills, education, or project consultations.");

        if (form && input instanceof HTMLInputElement) {
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const value = input.value.trim();

                if (!value || isSending) {
                    return;
                }

                input.value = "";
                answerMessage(value);
            });
        }

        suggestionButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const suggestion = button.getAttribute("data-ai-suggestion") || "";

                if (input instanceof HTMLInputElement) {
                    input.value = suggestion;
                }

                if (form instanceof HTMLFormElement) {
                    form.requestSubmit();
                }
            });
        });
    };

    initSsenksTechChat();
});
