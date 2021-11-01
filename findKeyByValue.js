// findKeyByValue.js

// findKeyByValue takes in an object and a value.
// should scan object and return first key which contains given value.
// If no key with given value found, return undefined.
// Tip 1: consider using Object.keys function to help you search through all object keys
//        Object.keys returns array of given obj's own property names iterated in same order a normal loop would
// Tip 2: consider using for...of to loop over keys returned by Object.keys

const findKeyByValue = function(obj, val) {
  const keyArr = Object.keys(obj);
  for (let key of keyArr) {
    if (obj[key] === val) {
      return key;
    }
  }
};

module.exports = findKeyByValue;