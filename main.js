const image = document.querySelector('.row img');

window.addEventListener('scroll', () => {
    
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    
    const zoom = 1 + scrollY / 4000; 
    const rotateX = scrollY / windowHeight * 0; 
    const rotateY = scrollY / windowHeight * 0; 

   
    image.style.transform = `scale(${zoom}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});



window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    
    document.querySelectorAll('.parallax-row').forEach(function(row, index) {
        const speed = index + 1; 
        row.style.backgroundPosition = `top ${scrollPosition / speed}px`; 
    });
});





