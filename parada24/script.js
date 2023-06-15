const celsiusInput = document.getElementById('celsius');
const fahrenheitResult = document.getElementById('fahrenheitResult');
const kelvinResult = document.getElementById('kelvinResult');

celsiusInput.addEventListener('input', updateTemperatures);

function updateTemperatures() {
    const celsius = parseFloat(celsiusInput.value);

      const fahrenheit = celsius * 9/5 + 32;
      fahrenheitResult.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;

      const kelvin = celsius + 273.15;
      kelvinResult.textContent = `Kelvin: ${kelvin.toFixed(2)}`;
    }