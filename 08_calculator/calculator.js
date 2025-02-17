const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (nums) {
	const total = nums.reduce((total, current) => {
		return total + current;
	}, 0);
	return total;
};

const multiply = function (nums) {
	const total = nums.reduce((total, current) => {
		return total * current;
	}, 1);
	return total;
};

const power = function (num1, num2) {
	return num1 ** num2;
};

const factorial = function (num) {
	const array = new Array(num)
		.fill(null)
		.map((_, i) => i + 1)
		.reduce((total, current) => {
			return total * current;
		}, 1);
	return array;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
