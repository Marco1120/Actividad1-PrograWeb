function convertir() {
    //Obtiene el valor del elemento con id kilometros
    var kilometros = document.getElementById("kilometros").value;
    //Convierte el valor a millas
    var millas = kilometros * 0.621371;
    //Muestra el resultado en el elemento con id resultado
    document.getElementById("resultado").value = millas + " millas";
}