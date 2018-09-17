/**
 * Unit test
 *
 */

// Dependencies
const assert = require('assert');
const lib = require('./../lib');

// Holder for the tests
const unit = {};
// --------- lib.square tests --------------- //
unit['lib.square should not throw when param is incorrect'] = (done) => {
  // Check that lib.square doesnt throw
  assert.doesNotThrow(() => {
    lib.square('aa');
    done();
  }, TypeError);
};
// Assert that lib.square function is returning a number
unit['lib.square should return a number'] = (done) => {
  // Check that return value is a number
  assert.equal(typeof (lib.square(2)), 'number');
  done();
};
// Check that return value is correct
unit['lib.square should return square of value'] = (done) => {
  // Check that return value is correct 2 * 2 = 4
  assert.equal(lib.square(2), 4);
  done();
};
// --------- lib.bulbSorting tests --------------- //
unit['lib.bulbSorting should not throw when param is incorrect'] = (done) => {
  // Check that function doesnt throw
  assert.doesNotThrow(() => {
    lib.bulbSorting('incorrect param');
    lib.bulbSorting([]);
    lib.bulbSorting(1);
    done();
  }, TypeError);
};

unit['lib.bulbSorting should return a sorted number array'] = (done) => {
  const testArray = [1, 7, 5, 2, 0];
  const sortedTestArray = [0, 1, 2, 5, 7];
  const val = lib.bulbSorting(testArray);
  // Check that return value is correct
  assert.equal(typeof (val), 'object');
  assert.ok(val instanceof Array);
  assert.ok(testArray.every(item => sortedTestArray.indexOf(item) >= 0));
  done();
};
// --------- lib.random tests --------------- //
unit['lib.randomString should not throw when param is incorrect'] = (done) => {
  // Check if param is correct and function doesnt throw
  assert.doesNotThrow(() => {
    lib.randomString('a');
    lib.randomString(-1);
    lib.randomString(0);
    // Test with undefined param
    let a;
    lib.randomString(a);
    done();
  }, TypeError);
};
unit['lib.randomString should return a string with the length equals param len'] = (done) => {
  // Get the random string with 10 chars
  const val = lib.randomString(10);
  // Check length
  assert.equal(val.length, 10);
  // Check if string is random
  const newVal = lib.randomString(10);
  assert.notEqual(val, newVal);
  done();
};
unit['lib.randomString should return a random string'] = (done) => {
  // Get the random string with 10 chars
  const val = lib.randomString(10);
  // Check if string is random
  const newVal = lib.randomString(10);
  assert.notEqual(val, newVal);
  done();
};
// --------- lib.isPalindrome tests --------------- //
unit['lib.isPalindrome should not throw when param is incorrect'] = (done) => {
  // Check that function doesnt throw when param is incorrect
  assert.doesNotThrow(() => {
    lib.isPalindrome(1);
    lib.isPalindrome(0);
    // Test with undefinded param
    let a;
    lib.isPalindrome(a);
    done();
  }, TypeError);
};
unit['lib.isPalindrome should check if string is palindrome'] = (done) => {
  const palindrome = 'abcdefedcba';
  const notPalindrome = 'abcdefgbda';
  // Check that function works correct
  assert.ok(lib.isPalindrome(palindrome));
  assert.ok(!lib.isPalindrome(notPalindrome));
  done();
};

// Export the tests to the runner
module.exports = unit;
