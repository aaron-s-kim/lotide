// countOnly function should take in collection of items and return counts for specific subset of items.
// It won't count everything.
// To decide what to count, will be given an idea of which items we care about and will only count those, ignoring others.
// Items in our case will be limited to Strings.
// countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (let item in itemsToCount) {

    if (itemsToCount[item]) {
      let count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (item === allItems[i]) {
          count += 1;
        }
      }
      if (count > 0) {
        results[item] = count;
      }
    }
  }
  return results;
};

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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

