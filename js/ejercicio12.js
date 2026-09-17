function convertir() {
    var pesos = document.getElementById("pesos").value;
    var dolar = pesos * 0.055;
    document.getElementById("resultado").value = dolar + " USD"
}