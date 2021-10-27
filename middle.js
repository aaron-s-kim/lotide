// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
// function middle should return array with only middle element(s) of provided array.
// length of returned elements could vary.

const middle = function(arr) {
  const newArr = [];
  if (arr.length <= 2) {
    return newArr;
  } else if (arr.length % 2 !== 0) {
    newArr.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    newArr.push(arr[(arr.length / 2) - 1]);
    newArr.push(arr[(arr.length / 2)]);
  }
  return newArr;
};

// TEST CODE

// For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]); // => []
middle([1, 2]); // => []

// For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

// assertArraysEqual
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);