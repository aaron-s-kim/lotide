// countOnly.js

// countOnly takes in array of items and an object {string: bool}
// Items in array will be limited to strings.
// if Obj key-value is true, count those items in array, ignoring others
// Return object containing counts of everything that the input object listed.

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

module.exports = countOnly;