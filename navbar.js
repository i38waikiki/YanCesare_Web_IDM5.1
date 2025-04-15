let lastScrollTop = 0; // Keeps track of the last scroll position
const navbar = document.querySelector('nav'); // Select the navbar

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset; // Current vertical scroll position

    // Ensure the navbar remains visible at the top of the page
    if (currentScroll <= 0) {
        navbar.classList.remove('hidden');
        return; // Stop further checks
    }

    // Hide the navbar when scrolling down
    if (currentScroll > lastScrollTop) {
        navbar.classList.add('hidden');
    } 
    // Show the navbar when scrolling up
    else {
        navbar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll; // Update the last scroll position
});

// Ensure the navbar is visible on page load
document.addEventListener('DOMContentLoaded', () => {
    navbar.classList.remove('hidden');
});