// console.assert() method writes an error message to the console if assertion is false. If assertion is true, nothing happens.

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

// Test eqArrays
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// Test assertEqual(eqArrays)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // true, true => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // false, false => should PASS

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // true, false => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // false, true => should FAIL