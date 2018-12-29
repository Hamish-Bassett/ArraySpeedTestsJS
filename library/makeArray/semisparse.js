/**
 * @function semisparse build a dense array with types based on 
 * @param  {object} options
 * @param  {any} options.key the key to be found 
 * @param  {number} options.length the length of the array to be built
 * @param  {number} option.spacing  the number of elements between the elements in the array.
 * @returns {array} an array containing key, which only has keys as dense as e
 */
function dense(options) {
  const res = new Array(options.length);

  for (let i = 0; i < res.length; i++) {
    if (i % options.spacing != 0)
      continue;
    switch (typeof options.key) {
    case 'string':
      res[i] = 'foo';
      break;
    case 'number':
    default:
      res[i] = i;
      break;
    }
  }

  res[Math.round(Math.random()*options.length)] = options.key;
  return res;
};

module.exports = dense;