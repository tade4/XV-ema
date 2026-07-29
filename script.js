// Definir la fecha del evento (12 de septiembre del año actual o próximo)
// Usamos el año actual dinámicamente o puedes forzarlo a '2026' si lo necesitas
const eventDate = new Date("September 12, 2026 21:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Si ya pasó la fecha, dejamos todo en 0
    if (timeLeft < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    // Cálculos de tiempo
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Formatear para que siempre tenga 2 dígitos (ej: 09, 05)
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);

// Ejecutar inmediatamente al cargar la página para evitar 1 segundo de retraso visual
updateCountdown();

// --- Lógica para animaciones al scrollear ---
// Seleccionamos todos los elementos con la clase 'reveal'
const revealElements = document.querySelectorAll('.reveal');

// Función que se ejecuta cuando el elemento entra en pantalla
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
};

const revealOptions = {
    threshold: 0.05 // Se dispara casi apenas asoma en la pantalla
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

// Observamos cada elemento
revealElements.forEach(el => revealObserver.observe(el));
