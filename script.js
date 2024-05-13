// Obtener elementos
const projects = document.querySelectorAll('.project');

// Función para abrir el pop-up
function openPopup(content) {
    const popup = document.createElement('div'); // Crear el elemento div para el pop-up
    popup.classList.add('popup'); // Agregar la clase 'popup'

    // Crear el contenido del pop-up con un contenedor y el contenido recibido
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContent.innerHTML = content;

    // Crear el botón de cerrar y añadir el evento para cerrar el pop-up
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function() {
        popup.remove(); // Eliminar el pop-up al hacer clic en el botón de cerrar
    });

    // Agregar el botón de cerrar al contenido del pop-up
    popupContent.appendChild(closeBtn);

    // Agregar el contenido del pop-up al pop-up
    popup.appendChild(popupContent);

    // Agregar el pop-up al cuerpo del documento
    document.body.appendChild(popup);
}

// Evento click para abrir el pop-up al hacer clic en un proyecto
projects.forEach(project => {
    project.addEventListener('click', function() {
        const popupContent = this.querySelector('.popup-content');
        if (popupContent) {
            openPopup(popupContent.innerHTML);
        }
    });
});



$(document).ready(function() {
    $('.filtro').on('click', function() {
        var categoria = $(this).data('categoria');
        
        if (categoria === 'TODOS') {
            $('.project').show(); // Muestra todos los proyectos
        } else {
            $('.project').hide(); // Oculta todos los proyectos
            $('.project[data-categoria="' + categoria + '"]').show(); // Muestra los proyectos de la categoría seleccionada
        }
    });
});






// Función para verificar si un elemento está en la vista
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para agregar la clase "in-view" cuando la sección está en el viewport
function animateProjects() {
    const projects = document.querySelectorAll('.animate-on-scroll .project');
    projects.forEach(project => {
        if (isInViewport(project)) {
            project.classList.add('in-view');
        } else {
            project.classList.remove('in-view');
        }
    });
}

// Agregar evento de scroll para activar la animación cuando la sección está en la vista
window.addEventListener('scroll', animateProjects);

// Llamar a la función por primera vez para animar los proyectos que ya están en la vista
animateProjects();
