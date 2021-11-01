// countLetters.js

// countLetters: take sentence (as str)
// return obj with count for each letter in sentence

const countLetters = function(str) {
  let newStr = str.split(" ").join("").toLowerCase();
  const lCount = {};
  
  for (let letter of newStr) {
    if (lCount[letter]) {
      lCount[letter] += 1;
    } else {
      lCount[letter] = 1;
    }
  }
  
  return lCount;
};

module.exports = countLetters;