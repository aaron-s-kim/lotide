// test/eqObjectsTest.js
// not converted to chai b/c redundant

const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

// // // TEST CODE
// // const ab = { a: "1", b: "2" };
// // const ba = { b: "2", a: "1" };
// // eqObjects(ab, ba); // => true
// // const abc = { a: "1", b: "2", c: "3" };
// // eqObjects(ab, abc); // => false
// // assertEqual(ab, ba); // => false
// // assertEqual(ab, abc); // => false

// // // Test Arrays
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);