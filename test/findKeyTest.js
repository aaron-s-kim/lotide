// test/findKeyTest.js

const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns 'noma' for {stars: 2}", () => {
    const stars = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const input = findKey(stars, x => x.stars === 2);
    const output = "noma";
    assert.strictEqual(input, output);
  });
});