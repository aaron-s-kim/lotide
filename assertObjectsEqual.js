
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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Example label: ${inspect(actual)}`);
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test Output
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);
