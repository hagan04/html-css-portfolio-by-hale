const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const row = document.querySelector('.connections-row');
const leftArrow = document.querySelector('.conn-arrow.left');
const rightArrow = document.querySelector('.conn-arrow.right');

const scrollAmount = 320;

function updateArrows() {
    const maxScroll = row.scrollWidth - row.clientWidth;

    if (row.scrollLeft <= 5) {
        
        leftArrow.classList.remove('show');
        rightArrow.classList.add('show');
    } else if (row.scrollLeft >= maxScroll - 5) {
        
        leftArrow.classList.add('show');
        rightArrow.classList.remove('show');
    } else {
        
        leftArrow.classList.add('show');
        rightArrow.classList.add('show');
    }
}

row.addEventListener('scroll', updateArrows);

leftArrow.addEventListener('click', () => {
    row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
rightArrow.addEventListener('click', () => {
    row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

updateArrows()