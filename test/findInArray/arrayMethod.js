const chai = require('chai');

const arrayMethod = require('../../library/findInArray/arrayMethod');

const expect = chai.expect;

const key = 'foo';
const test = [
  ,
  ,
  ,
  key,
  ,

];


describe('arrayMethod', () => {
  it('should be a function', () => {
    expect(arrayMethod).to.be.a("function");
  });
  it('should fail if the input is not valid', () => {
    expect(()=>{
      arrayMethod();
    }).to.throw();
    expect(()=>{
      arrayMethod(null ,'foo');
    }).to.throw();
    expect(()=>{
      arrayMethod(1 ,'foo');
    }).to.throw();
    expect(()=>{
      arrayMethod('fail' ,'foo');
    }).to.throw();
    expect(()=>{
      arrayMethod({} ,'foo');
    }).to.throw();
  });
  it('should return a boolean', ()=>{
    expect(arrayMethod(test,key)).to.be.a("boolean");
  });
  it('should return true if the key exists in the array',()=>{
    expect(arrayMethod(test,key)).to.be.true;
  });
  it('should return false if the key exists in the array',()=>{
    expect(arrayMethod(test,'fail')).to.be.false;
  });
});