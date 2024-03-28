window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const parallaxElement = document.querySelector('.hero-box');
    const content = document.querySelector('.content');
    parallaxElement.style.transform = `translateY(-${scrollPosition * 0.5}px)`;

});

