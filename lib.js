/**
 * Function for its testing
 *
 */

// Dependencies

// Container for sample function
const sample = {};


/**
*  Square function
* @param {x} integer number to square
* @return {x * x} Square x returns, if param is incorrect then return -1
*/
sample.square = (x) => {
  // Check if param is correct
  if (typeof (x) === 'number') {
    return x * x;
  }
  return -1;
};

/**
 * Sort array of numbers by bulb method
 * @param {arr} Array to sort by bulb method
 * @return {Array} Sorted array return if success and false when fail
 *
 */
sample.bulbSorting = (arr) => {
  // Asign arr to new array
  const sortedArr = typeof (arr) === 'object'
    && arr instanceof Array
    && arr.length > 0
    ? arr : false;
  // Check if sortedArr is array
  if (sortedArr) {
    // Number of unsorted values
    for (let ext = sortedArr.length; ext > 0; ext -= 1) {
      for (let i = 0; i < ext; i += 1) {
        // Check if i and i+1 item unsorted
        if (sortedArr[i] > sortedArr[i + 1]) {
          // Swap i and i+1 items values
          const val = sortedArr[i + 1];
          sortedArr[i + 1] = sortedArr[i];
          sortedArr[i] = val;
        }
      }
    }
    return sortedArr;
  }
  return false;
};
/**
 *
 * @param {number} len Length of string with random
 * @return {string} String with length letters and false if error
 *
 */
sample.randomString = (len) => {
  // Check param
  if (typeof (len) === 'number' && len > 0) {
    // Letters for generate random string
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numberLetters = letters.length;
    let genString = '';
    for (let i = 0; i < len; i += 1) {
      genString += letters[Math.floor(Math.random() * numberLetters)];
    }
    return genString;
  }
  return false;
};

/**
 * Check if string a palindrome
 * @param {string} str
 * @return {bool} Return true if string is a palindrome, or false otherwise
 *
 */
sample.isPalindrome = (str) => {
  if (typeof (str) === 'string' && str.length > 0) {
    const len = str.length;
    let palindrome = '';
    for (let i = 0; i < len; i += 1) {
      palindrome += str.charAt(len - 1 - i);
    }
    if (str === palindrome) {
      return true;
    }
    return false;
  }
  return -1;
};

// Export the container
module.exports = sample;
