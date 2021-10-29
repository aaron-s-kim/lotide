/* eslint-disable camelcase */

// findKeyByValue takes in an object and a value.
// should scan object and return first key which contains given value.
// If no key with given value is found, should return undefined.
// Tip 1: consider using Object.keys function to help you search through all object keys
//        Object.keys returns array of given obj's own property names iterated in same order a normal loop would
// Tip 2: consider using for...of to loop over keys returned by Object.keys

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  const keyArr = Object.keys(obj);
  for (let key of keyArr) {
    if (obj[key] === val) {
      return key;
    }
  }
};

// Using for...in instead.
// const findKeyByValue = function (obj, value) {
//   for (const genre in obj) {
//     if (obj[genre] === value) {
//       return genre;
//     }
//   }
//   return undefined;
// };

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// // Test
// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")); // should return drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);