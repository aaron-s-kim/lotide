// test/takeUntilTest.js

const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const input = takeUntil(data1, x => x < 0);
    const output = [1, 2, 5, 7, 2];
    assert.deepEqual(input, output);
  });
  it(`returns ["I've", "been", "to", "Hollywood"] for long array`, () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const input = takeUntil(data2, x => x === ',');
    const output = ["I've", "been", "to", "Hollywood"];
    assert.deepEqual(input, output);
  });
});