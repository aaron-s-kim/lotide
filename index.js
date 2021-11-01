// index.js

// // const assertArraysEqual = require('./assertArraysEqual');
// // const assertEqual = require('./assertEqual');
// // const assertObjectsEqual = require('./assertObjectsEqual');
// // const eqArrays = require('./eqArrays');
// // const eqObjects = require('./eqObjects');

const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without
};

// can now open in node REPL as follows:
// > const _ = require('./index')
// undefined
// > _
// { head: [Function: head],
//   tail: [Function: tail],
//   middle: [Function: middle] }
// > .exit