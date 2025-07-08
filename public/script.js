

document.addEventListener('DOMContentLoaded', () => {
   

    // Intersection Observer for animations
    const contentSection = document.querySelector('.content-section');
    if (contentSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        observer.observe(contentSection);
    }

    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const leftBtn = document.querySelector('.carousel-btn.left');
    const rightBtn = document.querySelector('.carousel-btn.right');
    if (carousel && items.length && leftBtn && rightBtn) {
        function checkCenter() {
            requestAnimationFrame(() => {
                items.forEach(item => {
                    const rect = item.getBoundingClientRect();
                    const itemCenter = rect.left + rect.width / 2;
                    const screenCenter = window.innerWidth / 2;
                    item.classList.toggle('carousel-item-center', Math.abs(itemCenter - screenCenter) < rect.width / 2);
                });
            });
        }

        carousel.addEventListener('scroll', checkCenter);
        window.addEventListener('resize', checkCenter);

        leftBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -carousel.clientWidth / 3, behavior: 'smooth' });
            checkCenter();
        });

        rightBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: carousel.clientWidth / 3, behavior: 'smooth' });
            checkCenter();
        });

        checkCenter();
    }

    const boxes = document.querySelectorAll('.fade-in-box');
    const boxObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 500}ms`;
                entry.target.classList.add('fade-in');
                boxObserver.unobserve(entry.target); // Unobserve once it has faded in
            }
        });
    }, { threshold: 0.1 });
    boxes.forEach((box) => {
        boxObserver.observe(box);
    });

    const leftButton = document.querySelector('.scroll-button.left-prod');
    const rightButton = document.querySelector('.scroll-button.right-prod');
    const scrollContainer = document.querySelector('.scroll-container');
    if (leftButton && rightButton && scrollContainer) {
        leftButton.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        });

        rightButton.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        });
    }

    const contentElements = document.querySelectorAll('.content');
    const contentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                contentObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    contentElements.forEach((content) => {
        contentObserver.observe(content);
    });

    const images = document.querySelectorAll('.image');
    const texts = document.querySelectorAll('.text');
    const imageTextObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('image')) {
                    entry.target.classList.add('visible');
                }
                if (entry.target.classList.contains('text')) {
                    entry.target.classList.add('visible');
                }
                imageTextObserver.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.1 });
    images.forEach(image => {
        imageTextObserver.observe(image);
    });
    texts.forEach(text => {
        imageTextObserver.observe(text);
    });

    // Animation for blog posts
    const posts = document.querySelectorAll('.post');
    function animatePosts() {
        posts.forEach((post, index) => {
            const delay = index * 200; // Delay for each post
            post.style.transitionDelay = `${delay}ms`;
            post.style.opacity = 1;
            post.style.transform = 'translateY(0)';
        });
    }
    animatePosts();
});
