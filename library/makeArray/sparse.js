/**
 * @function sparse 
 * @param  {object} options
 * @param  {number} length the length of the array in question.
 * @param  {any} key the object being searched for.
 * @returns {array} a sparse array with the key placed randomly in it.
 */
function sparse(options) {
  const res = Array(options.length);

  res[(Math.round(Math.random()) * options.length)] = options.key;

  return res;
}

module.exports = sparse;