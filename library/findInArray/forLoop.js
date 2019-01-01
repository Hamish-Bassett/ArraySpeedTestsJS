/**
 * find the first entry of key in target using a for loop
 * @param  {any[]} target the array of arbitrary length which should have a key in it.
 * @param  {any} key the item that we're looking for in the target array
 * @return {boolean} true when found, false when not found.
 */
function forLoop(target, key) {
  if ((typeof target === "undefined") || (typeof key === "undefined")){
    throw new Error('inputs cannot be undefined');
  }

  if(!Array.isArray(target)){
    console.log('typeerror');
    throw new TypeError('target must be an array');
  }

  for (let i=0; i <= target.length; i ++){
    if (target[i] === key)
      return true;
  }
  return false;
}

module.exports = forLoop;