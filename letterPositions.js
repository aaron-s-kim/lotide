// return all indices (zero-based positions) in string where each character is found
// for each letter, instead of returning just 1 number to represent its occurrences,
// multiple numbers may be needed to represent all the places in the string that it shows up

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(a1, a2) {
  if (a1.length === a2.length) {
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const letterPositions = function(sentence) {
  let newStr = sentence.toLowerCase();
  const results = {};

  for (let i = 0; i < newStr.length; i++) {
    let letter = newStr[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }

  return results;
  // return console.log(results);
};

// Test Output
letterPositions("lighthouse in the house");
letterPositions("hello");
assertArraysEqual(letterPositions("hello").e, [1]);

// {
//   h: [0],
//   e: [1],
//   l: [2, 3],
//   o: [4],
// };

// // Expected output
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }