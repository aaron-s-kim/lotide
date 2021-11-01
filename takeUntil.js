// takeUntil.js

// takeUntil takes two parameters: array & callback (Lodash calls "predicate")
// return a "slice of array with elements taken from the beginning."
// should continue until callback/predicate returns truthy value.
// callback should only be provided 1 value: The item in the array.

const takeUntil = function(array, callback) {
  const newArr = [];
  for (let item of array) {
    if (!callback(item)) {
      newArr.push(item);
    } else {
      break;
    }
  }
  return newArr; // "array: slice of array w/ elements taken from the beginning";
};

module.exports = takeUntil;