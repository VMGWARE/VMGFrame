window.lazyload = function () {
    const images = document.querySelectorAll('img[data-src]');

    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.setAttribute('loading', 'lazy'); // Add loading="lazy"
                console.log(`Lazy loading ${img.src}`);
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => {
        observer.observe(img);
    });
};
