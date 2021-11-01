// without.js

// without should take in source array and itemsToRemove array
// return new array with only elements from source not present in itemsToRemove array.

const without = function(source, itemsToRemove) {
  const newArr = source.slice();
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  return newArr; // return subset of given array, removing unwanted elements
};

module.exports = without;
