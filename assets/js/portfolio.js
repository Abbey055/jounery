document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");
    const navLinks = document.querySelectorAll(".site-nav a");
    const filterButtons = document.querySelectorAll(".filter-button");
    const portfolioCards = document.querySelectorAll(".portfolio-card");
    const portfolioButtons = document.querySelectorAll(".portfolio-open");
    const portfolioModal = document.getElementById("portfolioModal");
    const portfolioModalContent = document.getElementById("portfolioModalContent");
    const modalCloseTriggers = document.querySelectorAll("[data-modal-close]");
    const heroLocationButton = document.querySelector(".hero-card-pin");
    const heroLocationCard = document.getElementById("heroLocationCard");
    const navCta = document.querySelector(".nav-cta");
    const skillBars = document.querySelectorAll(".skill-fill");
    const yearNode = document.querySelector("[data-year]");

    const projects = {
        civicwatch: {
            title: "CivicWatch - Community Issue Reporting App",
            image: "assets/images/civicwatch-app.png",
            description: "A community-driven Android app that empowers citizens to report and track local issues.",
            overview: "CivicWatch allows community members to report issues like potholes, litter, and graffiti. It includes maps, voting, multi-language support, and a cleaner issue tracking experience.",
            tech: ["Java", "Firebase", "Google Maps API", "Material Design", "Glide", "Retrofit"],
            features: [
                "Report issues with location and photos",
                "Interactive map view for all reports",
                "Upvote important issues",
                "Dark and light theme support",
                "Multi-language support including Luganda",
                "Google Sign-In and guest mode"
            ],
            technologies: "Built with Java using Android SDK, Firebase Realtime Database, Firebase Authentication, Google Maps API, Glide, and Retrofit.",
            role: "Sole developer responsible for the full app flow, interface design, Firebase integration, and core mobile features.",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/MusumbaAbeljr055/civicwatch",
                    icon: "fa-brands fa-github",
                    secondary: true
                },
                {
                    label: "Download APK",
                    href: "https://github.com/MusumbaAbeljr055/civicwatch/releases/download/v1.0.0-beta/CivicWatch-v1.0.0-beta.apk",
                    icon: "fa-solid fa-download"
                }
            ]
        },
        devfollow: {
            title: "DevFollow - MUST Developer Community",
            image: "assets/images/devfollow.png",
            description: "A developer community platform for MUST students to connect, collaborate, and showcase their projects.",
            overview: "DevFollow was designed for Mbarara University of Science and Technology students to share projects, discover other developers, and build stronger collaboration around software ideas.",
            tech: ["JavaScript", "HTML/CSS", "Firebase", "REST APIs", "UI/UX Design"],
            features: [
                "Developer profiles and portfolio showcase",
                "Project sharing and collaboration support",
                "Real-time chat and messaging ideas",
                "Resource sharing for learning materials"
            ],
            technologies: "Built with modern JavaScript and Firebase, with responsive UI work and integration patterns for a student developer platform.",
            role: "Full stack developer responsible for the product structure, frontend work, Firebase integration, and deployment flow.",
            links: [
                {
                    label: "Live Demo",
                    href: "https://devfellowmust.web.app",
                    icon: "fa-solid fa-arrow-up-right-from-square"
                },
                {
                    label: "GitHub",
                    href: "https://github.com/MusumbaAbeljr055/DevFollow",
                    icon: "fa-brands fa-github",
                    secondary: true
                }
            ]
        },
        "python-bootcamp": {
            title: "Python Bootcamp Content",
            image: "assets/images/collect.png",
            description: "Structured Python learning content made to simplify technical concepts for students and beginners.",
            overview: "This project focuses on educational visuals and lesson support for Python topics, helping learners follow concepts more easily through clean, approachable presentation.",
            tech: ["Python", "Curriculum Design", "Visual Content", "Technical Writing"],
            features: [
                "Beginner-friendly topic breakdowns",
                "Visual explainers for Python concepts",
                "Reusable learning materials",
                "Clear structure for classroom and self-study use"
            ],
            technologies: "Content and visuals built around Python teaching, concept illustration, and practical learning workflows.",
            role: "Created the content direction, visual concept selection, and learner-focused presentation style.",
            links: [
                {
                    label: "Open Bootcamp",
                    href: "bootcamp.html",
                    icon: "fa-solid fa-arrow-up-right-from-square"
                }
            ]
        }
    };

    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = siteNav.classList.toggle("is-open");
            menuToggle.classList.toggle("is-open", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                siteNav.classList.remove("is-open");
                menuToggle.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    if (navCta && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        let pulseTimer;
        let pulseInterval;

        const stopPulse = () => {
            window.clearTimeout(pulseTimer);
            window.clearInterval(pulseInterval);
            pulseInterval = undefined;
            navCta.classList.remove("is-animating");
        };

        const triggerPulse = () => {
            navCta.classList.remove("is-animating");
            window.clearTimeout(pulseTimer);

            requestAnimationFrame(() => {
                navCta.classList.add("is-animating");
                pulseTimer = window.setTimeout(() => {
                    navCta.classList.remove("is-animating");
                }, 950);
            });
        };

        const startPulseLoop = () => {
            if (pulseInterval) {
                return;
            }

            pulseInterval = window.setInterval(triggerPulse, 3200);
            pulseTimer = window.setTimeout(triggerPulse, 1200);
        };

        navCta.addEventListener("mouseenter", stopPulse);
        navCta.addEventListener("mouseleave", startPulseLoop);
        navCta.addEventListener("focusin", stopPulse);
        navCta.addEventListener("focusout", startPulseLoop);

        startPulseLoop();
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filterButtons.forEach((item) => {
                const active = item === button;
                item.classList.toggle("is-active", active);
                item.setAttribute("aria-pressed", String(active));
            });

            portfolioCards.forEach((card) => {
                const categories = (card.dataset.category || "").split(/\s+/).filter(Boolean);
                const matches = filter === "all" || categories.includes(filter);
                card.classList.toggle("is-hidden", !matches);
            });
        });
    });

    const closePortfolioModal = () => {
        if (!portfolioModal) return;

        portfolioModal.classList.remove("is-open");
        portfolioModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    };

    const openPortfolioModal = (projectId) => {
        const project = projects[projectId];

        if (!project || !portfolioModal || !portfolioModalContent) {
            return;
        }

        const techTags = project.tech
            .map((tech) => `<span class="portfolio-tech-tag">${tech}</span>`)
            .join("");
        const featureItems = project.features
            .map((feature) => `<li>${feature}</li>`)
            .join("");
        const actionLinks = project.links
            .map((link) => {
                const secondaryClass = link.secondary ? " is-secondary" : "";
                return `
                    <a class="portfolio-action${secondaryClass}" href="${link.href}" target="_blank" rel="noreferrer">
                        <i class="${link.icon}"></i>
                        <span>${link.label}</span>
                    </a>
                `;
            })
            .join("");

        portfolioModalContent.innerHTML = `
            <article class="portfolio-modal-body">
                <h3 class="portfolio-modal-title" id="portfolioModalTitle">${project.title}</h3>
                <img class="portfolio-modal-image" src="${project.image}" alt="${project.title}">
                <div class="portfolio-tech-list">${techTags}</div>
                <div class="portfolio-modal-copy">
                    <p><strong>Description:</strong> ${project.description}</p>
                    <p><strong>Overview:</strong> ${project.overview}</p>
                    <p><strong>Technologies Used:</strong> ${project.technologies}</p>
                    <p><strong>My Role:</strong> ${project.role}</p>
                </div>
                <div>
                    <strong>Key Features</strong>
                    <ul class="portfolio-feature-list">${featureItems}</ul>
                </div>
                <div class="portfolio-modal-actions">${actionLinks}</div>
            </article>
        `;

        portfolioModal.classList.add("is-open");
        portfolioModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    };

    portfolioButtons.forEach((button) => {
        button.addEventListener("click", () => {
            openPortfolioModal(button.dataset.project);
        });
    });

    modalCloseTriggers.forEach((trigger) => {
        trigger.addEventListener("click", closePortfolioModal);
    });

    if (heroLocationButton && heroLocationCard) {
        const closeHeroLocation = () => {
            heroLocationCard.classList.remove("is-visible");
            heroLocationCard.setAttribute("aria-hidden", "true");
            heroLocationButton.setAttribute("aria-expanded", "false");
        };

        heroLocationButton.addEventListener("click", (event) => {
            event.stopPropagation();
            const isOpening = !heroLocationCard.classList.contains("is-visible");
            heroLocationCard.classList.toggle("is-visible", isOpening);
            heroLocationCard.setAttribute("aria-hidden", String(!isOpening));
            heroLocationButton.setAttribute("aria-expanded", String(isOpening));
        });

        heroLocationCard.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        document.addEventListener("click", () => {
            closeHeroLocation();
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeHeroLocation();
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closePortfolioModal();
        }
    });

    if (skillBars.length > 0) {
        const animateSkills = () => {
            skillBars.forEach((bar) => {
                const level = bar.dataset.level || "0";
                bar.style.width = `${level}%`;
            });
        };

        const skillSection = document.querySelector(".skills");

        if ("IntersectionObserver" in window && skillSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateSkills();
                        observer.disconnect();
                    }
                });
            }, { threshold: 0.35 });

            observer.observe(skillSection);
        } else {
            animateSkills();
        }
    }
});
