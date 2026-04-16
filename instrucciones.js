const textElement = document.getElementById('instruction-text');
const nextBtn = document.getElementById('next-text-btn');
const backBtn = document.getElementById('back-btn');
const langBtn = document.getElementById('lang-btn');

let currentLang = 'es'; // Idioma por defecto
let currentIndex = 0;

const content = {
    es: [
        `Bienvenido a <strong>Scroll Infinito</strong><br><br>Eres un influencer que intenta ganar seguidores sin perder la cordura.`,
        `<strong>Paso 1:</strong> Escanea el código QR para iniciar.`,
        `<strong>Paso 2:</strong> Presiona el botón <strong>"Asignar Rol"</strong>. Se te asignará un rol de inmediato y esa será tu ficha en el tablero.`,
        `<strong>El Tablero:</strong> Si caes en casillas especiales, tendrás que hacer <strong>"scroll"</strong>. Deberás elegir entre 3 opciones.`,
        `<strong>La Meta:</strong> Completa <strong>3 vueltas</strong> al tablero. Ganarás 3 scrolls extra por vuelta.`,
        `<strong>¡Cuidado!</strong> El jugador más cuerdo y con más seguidores gana. ¡No dejes que tus stats lleguen a 0!`
    ],
    en: [
        `Welcome to <strong>Infinite Scroll</strong>. You are an influencer trying to gain followers without losing your sanity.`,
        `<strong>Step 1:</strong> Scan the QR code to begin.`,
        `<strong>Step 2:</strong> Press the "Assign Role" button. A role will be immediately assigned to you, determining the piece you will use.`,
        `<strong>Game Board:</strong> If you land on special squares, you must "scroll" and choose between 3 decisions (favorable or unfavorable).`,
        `<strong>Rules:</strong> Roll the dice to advance. Every time you complete a lap, you can "scroll" 3 times during your next lap.`,
        `<strong>Victory:</strong> The player with the most followers and sanity after 3 laps wins. Watch your health or you might lose your turn!`
    ]
};

// Función para actualizar el texto en pantalla
function updateDisplay() {
    textElement.innerHTML = content[currentLang][currentIndex];
    
    // Actualizar texto del botón de "Siguiente" según idioma
    if (currentIndex === content[currentLang].length - 1) {
        nextBtn.innerText = currentLang === 'es' ? "¡Entendido! Jugar →" : "Got it! Play →";
    } else {
        nextBtn.innerText = currentLang === 'es' ? "Ver siguiente explicación →" : "Next explanation →";
    }
}

// Evento para cambiar idioma
langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    updateDisplay();
});

// Evento para avanzar
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < content[currentLang].length) {
        updateDisplay();
    } else {
        window.location.href = "index.html";
    }
});

// Botón volver
backBtn.addEventListener('click', () => {
    window.location.href = "index.html";
});

// Carga inicial
updateDisplay();    