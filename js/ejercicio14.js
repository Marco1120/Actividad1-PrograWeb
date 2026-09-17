function calcular() {
    let entrada = document.getElementById("num").value;
    let arreglo = entrada.split(",");
    let numeros = arreglo.map(Number);

    if (entrada === "" || numeros.some(isNaN)) {
        document.getElementById("mayor").value = "Datos inválidos";
        document.getElementById("menor").value = "Datos inválidos";
        document.getElementById("promedio").value = "Datos inválidos";
    }
    else {
        let mayor = Math.max(...numeros);
        let menor = Math.min(...numeros);
        let suma = numeros.reduce((acc, valor) => acc + valor, 0);
        let promedio = suma / numeros.length;

        document.getElementById("mayor").value = mayor;
        document.getElementById("menor").value = menor;
        document.getElementById("promedio").value = promedio;
    }
}