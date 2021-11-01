// eqObjects.js

// assertEqual can only be used for checking primitive return types
// eqObjects - 2 objs are equal when:
//  1. they have same # of keys
//  2. value for each key in obj1 is same as obj2

const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values, otherwise returns false
const eqObjects = function(object1, object2) {
  const keyArr1 = Object.keys(object1).sort();
  const keyArr2 = Object.keys(object2).sort();
  
  if (!eqArrays(keyArr1, keyArr2)) {  // Check #1: arr lengths & elements identical?
    return false;
  } else {

    for (let key of keyArr1) {
      if (Array.isArray(object1[key])) { // if val is an array...
        if (!eqArrays(object1[key], object2[key])) {  // Check #2: val arr lengths & elements identical?
          return false;
        }
      } else if (object1[key] !== object2[key]) {  // Check #3: vals identical?
        return false;
      }
    }
  }
  return true; // all 3 checks passed
};

module.exports = eqObjects;