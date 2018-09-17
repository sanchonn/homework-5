/**
 * Test runner
 *
 */
// Dependencies
const util = require('util');
// Debug log for server
const debug = util.debuglog('test');

// Application logic for the test runner
_app = {};

// Container for the tests
_app.tests = {};

// Add on the unit tests
_app.tests.unit = require('./unit');

// Count all the tests
_app.countTests = () => {
  let counter = 0;
  Object.keys(_app.tests).forEach((key) => {
    let subTests = _app.tests[key];
    Object.keys(subTests).forEach((testName) => {
      counter += 1;
    });
  });
  return counter;
};

// Run all the tests, collecting the errors and successes
_app.runTests = () => {
  const errors = [];
  let successes = 0;
  const limit = _app.countTests();
  let counter = 0;
  Object.keys(_app.tests).forEach((key) => {
    console.log(key);
    const subTests = _app.tests[key];
    Object.keys(subTests).forEach((testName) => {
      (() => {
        const tmpTestName = testName;
        const testValue = subTests[testName];
        // Call the test
        try {
          testValue(() => {
            // If it calls back without throwing, then it succeded, so log it in green
            debug('\x1b[32m%s\x1b[0m', `[${counter}] ${tmpTestName}`);
            counter += 1;
            successes += 1;
            if (counter === limit) {
              _app.produceTestReport(limit, successes, errors);
            }
          });
        } catch (e) {
          // If it throws, then it failed, so capture the error thrown and log it in red
          errors.push({
            name: testName,
            error: e,
          });
          debug('\x1b[31m%s\x1b[0m$', `[${counter}] ${tmpTestName}`);
          counter += 1;
          if (counter === limit) {
            _app.produceTestReport(limit, successes, errors);
          }
        }
      })();
    });
  });
};

// Produce a test outcome report
_app.produceTestReport = (limit, successes, errors) => {
  console.log('');
  console.log('-----------------BEGIN TEST REPORT-----------------');
  console.log('');
  console.log('Total tests: ', limit);
  console.log('Fails: ', errors.length);
  console.log('');

  // If there are errors, print them in detail
  if (errors.length > 0) {
    console.log('-----------------BEGIN ERROR DETAILS -----------------');
    console.log('');
    errors.forEach((testError) => {
      debug('\x1b[31m%s\x1b[0m', testError.testName);
      console.log(testError.error);
      console.log('');
    });
    console.log('');
    console.log('-----------------END ERROR DETAILS -------------------');
  }
  console.log('');
  console.log('-----------------END TEST REPORT -----------------');
  process.exit(0);
};

// Run the tests
_app.runTests();
