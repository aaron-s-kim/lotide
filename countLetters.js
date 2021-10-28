// function countLetters: take sentence (as str)
// then return count of each letter in that sentence
// report back multiple numbers

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  
  return console.log(lCount);
};

// Test Output
countLetters("lighthouse in the house");

// // Expected output
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }