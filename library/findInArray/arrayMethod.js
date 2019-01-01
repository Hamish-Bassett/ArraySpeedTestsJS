/**
 * find the first element in the array test that is the value key.
 * @param  {any} test the array to be tested on
 * @param  {any} key the key that we are looking for
 * @return {boolean} returns true if key exists and false otherwise.
 */
function arrayMethod(test, key) {
  if ((typeof test === 'undefined') ||(typeof key === 'undefined')){
    throw new TypeError('the input values cannot be undefined');
  }
  if(!Array.isArray(test)) {
    throw new TypeError('test is not an Array');
  }

  const res = test.indexOf(key);

  return (res !== -1);
}

module.exports = arrayMethod;