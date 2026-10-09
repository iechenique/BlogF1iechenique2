// Función 1: Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Función 2: Resaltado automático del menú activo
function setActiveMenu() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Función 3: Mostrar saludo en el header
function mostrarSaludoHeader() {
    const hora = new Date().getHours();
    let saludo = '';
    let emoji = '';
    
    if (hora < 12) {
        saludo = 'Buenos días';
        emoji = '☀️';
    } else if (hora < 18) {
        saludo = 'Buenas tardes';
        emoji = '🌤️';
    } else {
        saludo = 'Buenas noches';
        emoji = '🌙';
    }
    
    // Crear el elemento del saludo
    const saludoElement = document.createElement('div');
    saludoElement.id = 'greeting-badge';
    saludoElement.textContent = `${emoji} ${saludo}`;
    
    // Insertar en el header
    const header = document.querySelector('header h1');
    if (header && !document.getElementById('greeting-badge')) {
        header.after(saludoElement);
    }
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', () => {
    setActiveMenu();
    
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    
    mostrarSaludoHeader();
});