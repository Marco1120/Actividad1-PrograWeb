const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

function calcularOperacion(operacion) {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;

    if (numero1 === "" || numero2 === "" || isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: 'error',
            title: 'Datos inválidos',
            text: 'Ingrese dos números válidos'
        });
        return;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    let resultado;

    if (operacion === 'suma') {
        resultado = sumar(numero1, numero2);
    }
    else if (operacion === 'resta') {
        resultado = restar(numero1, numero2);
    }
    else if (operacion === 'multiplicacion') {
        resultado = multiplicar(numero1, numero2);
    }
    else if (operacion === 'division') {
        resultado = dividir(numero1, numero2);
    }

    if (resultado === 'Error: División por cero') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se puede dividir entre cero'
        });
        return;
    }

    document.getElementById("resultado").value = resultado;
}