// assertEqual can only be used for checking primitive return types
// will now make assertion for objects
// eqObjects - 2 objs are equal when:
//  1. they have same # of keys
//  2. value for each key in obj1 is same as obj2

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

// // Test Primitives

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(ab, ba); // => false
// assertEqual(ab, abc); // => false

// // Test Arrays

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

