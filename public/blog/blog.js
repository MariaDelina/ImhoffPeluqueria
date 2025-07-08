// Animar los posts cuando el contenido esté listo
document.addEventListener('DOMContentLoaded', function () {
    //PAGINA BLOG
    // Efecto de los posts
    const posts = document.querySelectorAll('.post');
    const animationDuration = 2000; // Duración en ms

    function animatePosts() {
        posts.forEach((post, index) => {
            const delay = index * 200; // Delay para cada post
            post.style.transitionDelay = `${delay}ms`;
            post.style.opacity = 1;
            post.style.transform = 'translateY(0)';
        });
    }

    // Llamar a la función de animación cuando el contenido esté listo
    animatePosts();
});


