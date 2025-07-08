document.addEventListener('DOMContentLoaded', () => {
    const hairstyles = document.querySelectorAll('.hairstyle');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const nameValue = entry.target.getAttribute('data-name');
                const priceValue = entry.target.getAttribute('data-price');
                const nameElement = entry.target.querySelector('.name');
                const priceElement = entry.target.querySelector('.price');
                
                nameElement.innerHTML = '';
                priceElement.innerHTML = '';

                [...nameValue].forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.style.animationDelay = `${index * 0.3}s`;
                    span.style.transform = `translate(${getRandomDirection()})`;
                    nameElement.appendChild(span);
                });

                [...priceValue].forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.style.animationDelay = `${index * 0.3}s`;
                    span.style.transform = `translate(${getRandomDirection()})`;
                    priceElement.appendChild(span);
                });

                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, observerOptions);

    hairstyles.forEach(hairstyle => {
        observer.observe(hairstyle);
    });

    function getRandomDirection() {
        const directions = ['-100px, 0', '100px, 0', '0, -100px', '0, 100px'];
        return directions[Math.floor(Math.random() * directions.length)];
    }
});
