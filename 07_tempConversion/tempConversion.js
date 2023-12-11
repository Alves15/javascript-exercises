const convertToCelsius = function(tempF) {
  convTempC = 5/9 * (tempF - 32); 
  return Number(convTempC.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  convTempF = (tempC * 9/5) + 32
  return Number(convTempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
