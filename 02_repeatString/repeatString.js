const repeatString = function (word, count) {
  string = "";
  if (count >= 0) {
    for (let i = 0; i < count; i++) {
      string += word;
    }
  } else {
    string = "ERROR";
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
