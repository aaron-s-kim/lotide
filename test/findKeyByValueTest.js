// test/findKeyByValueTest.js

const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const input = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
    const output = 'comedy';
    assert.strictEqual(input, output);
  });
});