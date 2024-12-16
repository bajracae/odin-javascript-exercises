const removeFromArray = function (arr, ...elements) {
  return arr.filter((num) => !elements.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
