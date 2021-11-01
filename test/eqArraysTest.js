// test/eqArraysTest.js

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE

// // Test eqArrays
// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// Test assertEqual(eqArrays)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // (true), true => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // (false), false => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // (true), false => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // (false), true => should FAIL