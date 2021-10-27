// Implement without function
// should take in source array and itemsToRemove array
// should return new array with only elements from source that are not present in itemsToRemove array.

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

// Test
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
