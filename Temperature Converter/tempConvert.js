const degreeInput = document.querySelector('input[name="degree"]');
const unitSelect = document.querySelector('select[name="type"]');
const convertButton = document.querySelector('button');
const resultOutput = document.querySelector('.output p');

function convertToCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
} 

function convertToFahrenheit(celcius) {
  return (celcius * 9 / 5)  + 32;
}

function convertToKelvin(celcius) {
  return celcius + 273.15;
}

function convertTemperature() {
  const degree = parseFloat(degreeInput.value);
  const selectedUnit = unitSelect.value;

  if (isNaN(degree)) {
    resultOutput.textContent = 'Please enter a valid number';
    return;
  }

  let result;

  switch (selectedUnit) {
    case 'Fahrenherit':
      result = convertToFahrenheit(degree);
      resultOutput.textContent = `Result: ${result.toFixed(2)} °F`;
      break;
    case 'Celcius':
      result = selectedUnit === 'Celcius' ? degree : convertToCelcius(degree);
      resultOutput.textContent = `Result: ${result.toFixed(2)} °C`;
      break;
    case 'Kelvin':
      result = selectedUnit === 'Kelvin' ? degree : convertToKelvin(degree);
      resultOutput.textContent = `Result: ${result.toFixed(2)} K`;
      break;
    default:
      resultOutput.textContent = 'Please select a valid unit';
  }
}

convertButton.addEventListener('click', convertTemperature);
