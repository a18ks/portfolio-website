// script.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");

    // Hover effect for buttons
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.classList.add("hovered");
        });

        button.addEventListener("mouseleave", () => {
            button.classList.remove("hovered");
        });
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust offset for a smooth scroll effect
                behavior: 'smooth'
            });
        });
    });
});
