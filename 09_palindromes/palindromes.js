const palindromes = function (text) {
	text = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	let reversed = text.split("").reverse().join("");
	return text == reversed;
};

// Do not edit below this line
module.exports = palindromes;
