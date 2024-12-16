const convertToCelsius = function (fahrenheit) {
	convertedNum = (fahrenheit - 32) * (5 / 9);
	return parseFloat(convertedNum.toFixed(1));
};

const convertToFahrenheit = function (celsius) {
	convertedNum = celsius * (9 / 5) + 32;
	return parseFloat(convertedNum.toFixed(1));
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
