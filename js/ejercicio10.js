const btnConvertir = document.getElementById('btnConvertir');
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const mensajeError = document.getElementById('mensajeError');

btnConvertir.addEventListener('click', function () {
    const valorCelsius = celsiusInput.value.trim();

    if (valorCelsius === '' || isNaN(valorCelsius)) {
        mensajeError.style.display = 'block';
        fahrenheitInput.value = '';
        return;
    }

    mensajeError.style.display = 'none';
    const celsius = parseFloat(valorCelsius);
    const fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2) + '°F';
});