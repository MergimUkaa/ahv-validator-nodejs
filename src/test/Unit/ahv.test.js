const assert = require('assert');
const { default: check } = require('../../../build/AHV/check-ahv');


describe('Test AHV function', () => {
 it('it should return length of ahv = 9', () => {
       const checkAHV = check('756.9217.0769.85');
       assert.equal(13, checkAHV.length);
    });
 it('it should return valid = true without dots', () => {
       const checkAHV = check('7569217076985');
       assert.equal(true, checkAHV.valid);
    });
 it('it should return valid = true with dots', () => {
       const checkAHV = check('756.9217.0769.85');
       assert.equal(13, checkAHV.length);
    });
 it('it should return valid = false with correct length', () => {
       const checkAHV = check('756.9217.0769.82');
       assert.equal(13, checkAHV.length);
       assert.equal(false, checkAHV.valid);
    });
 it('it should return valid = true with correct length', () => {
       const checkAHV = check('756.9217.0769.85');
       assert.equal(13, checkAHV.length);
       assert.equal(true, checkAHV.valid);
    });

});