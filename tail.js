// tail.js

const tail = function(arr) {
  let tailArr = arr.slice(1);
  return tailArr;
};

module.exports = tail;

// // Notes
// array.slice(start, end)
// returns shallow copy of portion of arr into new arr obj selected from start to end (end not included)
// start and end represent the index of items in that array. Original array will not be modified.
// arr = [a, b, c, d]; arr.slice(1) returns [b, c, d]