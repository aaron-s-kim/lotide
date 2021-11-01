// test/mapTest.js

const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const input = map(words, word => word[0]);
    const output = ['g', 'c', 't', 'm', 't'];
    assert.deepEqual(input, output);
  });
});
