// test/countLettersTest.js

const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns object with letter count of sentence", () => {
    const input = countLetters("lighthouse in the house");
    const output = {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    };
    assert.deepEqual(input, output);
  });
});
