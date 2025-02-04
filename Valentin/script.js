const botonNo = document.getElementById('no');
const botonSi = document.getElementById('si');
const respuesta = document.getElementById('respuesta');
const card = document.querySelector('.card'); // Contenedor principal

// Asegurar que el botón "No" es posicionable y visible
botonNo.style.position = "absolute";
botonNo.style.zIndex = "9999";

// Posicionar el botón "No" justo a la derecha del botón "Sí"
function posicionInicial() {
    const siRect = botonSi.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    // Posicionar el botón "No" justo a la derecha del "Sí"
    botonNo.style.left = `${siRect.right - cardRect.left + 10}px`; // 10px de margen
    botonNo.style.top = `${siRect.top - cardRect.top}px`;
}

// Mover el botón "No" dentro de los límites de la tarjeta cuando el mouse lo toque
botonNo.addEventListener('mouseover', () => {
    const cardRect = card.getBoundingClientRect();

    const minX = 10; // Margen mínimo
    const maxX = cardRect.width - botonNo.offsetWidth - 10; // Máximo dentro de la tarjeta
    const minY = 10;
    const maxY = cardRect.height - botonNo.offsetHeight - 10;

    // Generar nuevas coordenadas en todas direcciones
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;

    botonNo.style.left = `${x}px`;
    botonNo.style.top = `${y}px`;
});

// Comportamiento del botón "Sí"
botonSi.addEventListener('click', () => {
    respuesta.textContent = "¡Sabía que dirías que sí Cielo, por algo eres el amor de mi vida! 💖";
    respuesta.style.animation = "none";
    setTimeout(() => respuesta.style.animation = "fadeIn 1s forwards", 10);
});

// Ejecutar la posición inicial cuando cargue la página
window.onload = posicionInicial;
