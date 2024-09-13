function mostrarDetalles(elemento) {
    const detalles = elemento.querySelector('.detalles-receta');
    const isVisible = detalles.style.display === 'block';
    
    const todosDetalles = document.querySelectorAll('.detalles-receta');
    todosDetalles.forEach(detalle => {
        detalle.style.display = 'none';
    });

    if (!isVisible) {
        detalles.style.display = 'block';
    }
}

function toggleMenu() {
    const nav = document.querySelector('.menu-navegacion');
    nav.classList.toggle('active');
}

document.addEventListener('click', (event) => {
    const menu = document.querySelector('.menu-navegacion');
    if (!menu.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});
