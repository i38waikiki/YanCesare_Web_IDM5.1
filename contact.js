// Scroll animation for contact form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    const handleScroll = () => {
        const formTop = contactForm.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (formTop < windowHeight - 50) {
            contactForm.classList.add('active');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ensure the form is visible on load if already in view
});
