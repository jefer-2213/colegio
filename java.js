document.addEventListener("DOMContentLoaded", function() {
    alert("Bienvenido a nuestra Institución Educativa!");

    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
    });

    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#002060";
        } else {
            header.style.backgroundColor = "#004080";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Efecto de revelado en la historia
    document.getElementById("revealHistory").addEventListener("click", function() {
        document.getElementById("historyText").innerText += " Contamos con docentes altamente capacitados y una infraestructura moderna.";
        this.style.display = "none";
    });

    // Animación de estadísticas
    let studentCount = 0;
    let yearsExperience = 0;
    let studentElement = document.getElementById("studentCount");
    let yearsElement = document.getElementById("yearsExperience");

    function updateStats() {
        if (studentCount < 5000) studentCount += 100;
        if (yearsExperience < 20) yearsExperience += 1;
        studentElement.innerText = `+${studentCount}`;
        yearsElement.innerText = `+${yearsExperience}`;
        if (studentCount < 5000 || yearsExperience < 20) {
            setTimeout(updateStats, 100);
        }
    }
    updateStats();

    // Cambio dinámico de testimonios
    let testimonials = [
        "\"Los profesores son increíbles y siempre nos apoyan.\"",
        "\"Las instalaciones son modernas y cómodas para estudiar.\"",
        "\"Gracias a esta institución, logré alcanzar mis sueños.\""
    ];
    let currentTestimonial = 0;
    document.getElementById("nextTestimonial").addEventListener("click", function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        document.getElementById("testimonialText").innerText = testimonials[currentTestimonial];
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let courses = document.querySelectorAll(".course");
    courses.forEach(course => {
        course.addEventListener("mouseover", () => {
            course.style.transform = "scale(1.05)";
            course.style.boxShadow = "4px 4px 12px rgba(0,0,0,0.3)";
        });

        course.addEventListener("mouseout", () => {
            course.style.transform = "scale(1)";
            course.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
        });

        course.addEventListener("click", () => {
            alert(`Información sobre ${course.querySelector("h4").innerText}: ${course.querySelector("p").innerText}`);
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("form");
    let inputs = form.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            if (input.value.trim() !== "") {
                input.style.borderColor = "#008000";
            } else {
                input.style.borderColor = "#ff0000";
            }
        });
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Gracias por inscribirte. Te contactaremos pronto.");
    });
});
