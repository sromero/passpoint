// scripts.js

emailjs.init('hb8EKPFvRVQ4TVStL');

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const submitButton = document.getElementById("submitButton");
    submitButton.textContent = "Enviando...";  // Cambiar el texto del botón

    // Enviar el correo a través de EmailJS
    emailjs.sendForm("service_6g5vs5r", "template_7kt1j7z", this)  // "this" es el formulario en sí
        .then(function(response) {
            submitButton.textContent = "Enviar Mensaje";  // Restablecer el texto del botón

            // Limpiar los campos del formulario
            document.getElementById('contactForm').reset();

            // Mostrar mensaje de éxito
            alert("Mensaje enviado con éxito!");
        }, function(error) {
            submitButton.textContent = "Enviar Mensaje";  // Restablecer el texto del botón

            // Mostrar mensaje de error
            alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
            console.log(error); // Muestra el error en la consola para poder depurarlo
        });
});
