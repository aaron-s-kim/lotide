// findKey.js

// should take in object and callback.
// should scan object and return first key for which callback returns a truthy value.
// If no key found, then should return undefined.

const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;