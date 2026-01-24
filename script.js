document.addEventListener("DOMContentLoaded", () => {

    /* ===== ACTIVE NAV ===== */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (scrollY >= sectionTop) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    /* ===== MOBILE MENU ===== */
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    /* ===== CONNECTIONS ARROWS ===== */
    const row = document.querySelector(".connections-row");
    const leftArrow = document.querySelector(".conn-arrow.left");
    const rightArrow = document.querySelector(".conn-arrow.right");

    if (!row) return;

    const scrollAmount = 320;

    function updateArrows() {
        const maxScroll = row.scrollWidth - row.clientWidth;

        leftArrow.classList.toggle("show", row.scrollLeft > 5);
        rightArrow.classList.toggle("show", row.scrollLeft < maxScroll - 5);
    }

    leftArrow.addEventListener("click", () => {
        row.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
        row.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    row.addEventListener("scroll", updateArrows);
    updateArrows();
});
