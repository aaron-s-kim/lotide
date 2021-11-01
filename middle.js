// middle.js

// should return array with only middle element(s) of provided array.
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

module.exports = middle;