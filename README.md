# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@aaron-s-kim/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters`: return obj with count for each letter in sentence
* `countOnly`: count items in array only if object value is true
* `findKey`: return first key that callback returns a truthy value
* `findKeyByValue`: return first key which contains given value
* `flatten`: returns 'flattened' version of array
* `head`: returns first element in array
* `letterPositions`: returns all indices in string where each character is found
* `map`: returns new array based on the callback function
* `middle`: returns middle elements of array
* `tail`: returns array without first element
* `takeUntil`: returns slice of array taken until callback returns truthy value
* `without`: returns new array with only elements from source not present in indicated array