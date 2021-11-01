// test/countOnlyTest.js

const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns obj {item to count: item count} from an array given obj specifying items to count", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const toCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const input = countOnly(firstNames, toCount);
    const output = { Jason: 1, Fang: 2 };
    assert.deepEqual(input, output);
  });
});
