// test/middleTest.js

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("return empty array if 0 elements", () => {
    console.log(middle([]));
    assert.deepEqual(middle([]), []);
  });
  it("return empty array if only 1 element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("return empty array if only 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("return 1 element array if odd array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("return 2 middle elements array if even array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  // it("returns [2, 3] for [1, 2, 3]", () => {
  //   assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  // });
  // it("returns [] for ['5']", () => {
  //   assert.deepEqual(tail(['5']), []);
  // });
});


// // Before conversion to Mocha Chai
// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual'); // already contains eqArrays