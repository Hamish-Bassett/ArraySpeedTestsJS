const chai = require('chai');

const expect = chai.expect;

const index = require('../index');

describe('index', () => {
  it('should return a function', () => {
    expect(index).to.be.a('function');
  });
});