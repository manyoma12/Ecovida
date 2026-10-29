function comprobarRespuesta(esCorrecta) {
    const resultado = document.getElementById("resultado");

    if (esCorrecta) {
        resultado.textContent =
            "¡Correcto! Reutilizar ayuda a reducir los residuos. 🌱";
        resultado.style.color = "green";
    } else {
        resultado.textContent =
            "Inténtalo de nuevo. Elige la opción que permite reutilizar un objeto.";
        resultado.style.color = "red";
    }
}
