// test/tailTest.js

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns original array length unchanged", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });
});

// // Before conversion to Mocha Chai
// const assertEqual = require('../assertEqual');
// const tail = require('../tail');