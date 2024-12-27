const convertToCelsius = function(temp) {
    celciusTemp = ((temp - 32) * (5/9));
    return Number(celciusTemp.toFixed(1));
}


const convertToFahrenheit = function(temp) {
  fahrenheitTemp = (temp * (9/5) + 32);
  return Number(fahrenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
