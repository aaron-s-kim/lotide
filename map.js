// Our map function will take in two arguments:
// An array to map & a callback function
// The map function will return a new array based on the results of the callback function.

// 45 minutes

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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

// Expected Output
// [ 'g', 'c', 't', 'm', 't' ]

// Test Cases
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

