// test/withoutTest.js

const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] for without([1, 2, 3], [1])", () => {
    const input = without([1, 2, 3], [1]);
    const output = [2, 3];
    assert.deepEqual(input, output);
  });
  it("returns ['1', '2'] for without(['1', '2', '3'], [1, 2, '3'])", () => {
    const input = without(['1', '2', '3'], [1, 2, '3']);
    const output = ['1', '2'];
    assert.deepEqual(input, output);
  });
});

