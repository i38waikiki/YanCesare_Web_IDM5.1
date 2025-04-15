document.addEventListener("DOMContentLoaded", () => {
    // Thumbnails Hover Effect
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail) => {
        const img = thumbnail.querySelector("img");
        const originalSrc = img.src;
        const hoverSrc = thumbnail.getAttribute("data-hover");

        thumbnail.addEventListener("mouseover", () => {
            if (hoverSrc) img.src = hoverSrc;
        });

        thumbnail.addEventListener("mouseout", () => {
            img.src = originalSrc;
        });
    })});

    /*Carousel Functionality*/

    const carousel = document.querySelector('.carousel1');
const prevButton = document.querySelector('.carousel-prev1');
const nextButton = document.querySelector('.carousel-next1');

let scrollPosition = 0;
const itemWidth = carousel.querySelector('.carousel-item1').clientWidth + 10; // Include gap

prevButton.addEventListener('click', () => {
    scrollPosition = Math.min(scrollPosition + itemWidth, 0); // Prevent scrolling past start
    carousel.style.transform = `translateX(${scrollPosition}px)`;
});

nextButton.addEventListener('click', () => {
    const maxScroll = -(carousel.scrollWidth - carousel.clientWidth);
    scrollPosition = Math.max(scrollPosition - itemWidth, maxScroll); // Prevent scrolling past end
    carousel.style.transform = `translateX(${scrollPosition}px)`;
});
