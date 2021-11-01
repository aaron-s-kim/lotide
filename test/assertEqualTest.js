// test/assertEqualTest.js

const assert = require('chai').assert;

describe("#assert", () => {
  it("returns false for non-matches", () => {
    assert.notEqual("Lighthouse Labs", "Bootcamp");
  });
  it("returns true for identical matches", () => {
    assert.strictEqual(1, 1);
  });
  it("returns false for non-identical matches", () => {
    assert.notStrictEqual(1, "1");
  });
});

// // Before conversion to Mocha Chai
// const assertEqual = require('../assertEqual');
