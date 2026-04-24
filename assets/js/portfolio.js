document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");
    const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
    const revealItems = document.querySelectorAll("[data-reveal]");
    const skillBars = document.querySelectorAll(".skill-fill");
    const skillSection = document.getElementById("skills");
    const yearNode = document.querySelector("[data-year]");

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
});
