// wrapper around individual methods. We will want to house all the constructors in one namespace.
const sparse = require('./makeArray/sparse');
const dense = require('./makeArray/dense');
const semisparse = require('./makeArray/semisparse');

module.exports = {
  sparse,
  dense,
  semisparse,
};