function verificar() {
    var edad = document.getElementById("edad").value;
    if (edad === "" || isNaN(edad)) {
        document.getElementById("resultado").value = "Ingrese una edad válida";
    }
    else if(edad >= 18) {
        document.getElementById("resultado").value = "Puedes votar";
    }
    else if(edad < 18) {
        document.getElementById("resultado").value = "No puedes votar";
    }
}