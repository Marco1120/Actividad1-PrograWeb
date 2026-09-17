function convertir() {
    //Obtiene el valor del elemento con id celsius
    var celsius = document.getElementById("celsius").value;

    //Valida que el campo no este vacio y que sea numerico
    if (celsius === "" || isNaN(celsius)) {
        document.getElementById("resultado").value = "";
        return;
    }

    //Convierte el valor a Fahrenheit
    var fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;

    //Muestra el resultado en el elemento con id resultado
    document.getElementById("resultado").value = fahrenheit.toFixed(2) + "°F";
}