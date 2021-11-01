// letterPositions.js

// return all indices (zero-based positions) in string where each character is found
// for each letter, instead of returning just 1 number to represent occurrence,
// multiple numbers may be needed to represent all the places in the string that it shows up

const letterPositions = function(sentence) {
  let newStr = sentence.toLowerCase();
  const results = {};

  for (let i = 0; i < newStr.length; i++) {
    let letter = newStr[i];
    if (letter === ' ') {
      continue;
    } else {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;