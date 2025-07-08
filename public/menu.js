function initializeMenu() {
    // Intenta obtener los elementos del DOM
    const burger = document.querySelector('.burger');
    const background = document.querySelector('.show-dropdown-background');
    const dropdown = document.querySelector('.dropdown'); // Cambiado de dropdown-content a dropdown

    // Verifica que los elementos existen
    if (!burger || !background || !dropdown) {
        console.warn('Menu elements not found.');
        return;
    }

    function toggleMenuIndex() {
        const isShowing = dropdown.classList.contains('active');
        if (!isShowing) {
            background.classList.add('active');
            dropdown.classList.add('active');
        } else {
            background.classList.remove('active');
            dropdown.classList.remove('active');
        }
    }

    burger.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenuIndex();
    });

    background.addEventListener('click', () => {
        background.classList.remove('active');
        dropdown.classList.remove('active');
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target) && !burger.contains(event.target)) {
            background.classList.remove('active');
            dropdown.classList.remove('active');
        }
    });
}

// Llamar a la función para inicializar el menú
document.addEventListener('DOMContentLoaded', initializeMenu);
