/**
 * Test suite for the upperFirst function
 * 
 * This suite tests the get function from the '../src/upperFirst.js' module
 * It uses the 'chai' library for assertions.
 * 
 * The tests cover the following scenarios:
 *  - converting to upperfirst from lowercase word
 *  - converting to upperfirst from CAPS WORDS
 *  - converting to upperfirst from empty string
 *  - 
 */

import {expect} from 'chai';
import upperFirst from '../src/upperFirst.js'

describe('upperFirst', () => { 

    // tests for edge cases
    it('should return empty string for empty input', () => {
        expect(upperFirst('')).to.equal('');
    });

    it('should return untouched character for special character', () => {
        expect(upperFirst('!')).to.equal('!');
    });

    it('should return string untouched when first character is special', () => {
        expect(upperFirst('123fred')).to.equal('123fred');
    });


    // tests for normal cases

    it('should return word with first character in uppercase from all lowercase', () => {
        expect(upperFirst('fred')).to.equal('Fred');
    });

    it('should return word with first character in uppercase from all uppercase', () => {
        expect(upperFirst('FRED')).to.equal('FRED');
    });

    it('should return word with first character in uppercase from first uppercase', () => {
        expect(upperFirst('Fred')).to.equal('Fred');
    });
    it('should return word with first character in uppercase from first uppercase and rest random', () => {
        expect(upperFirst('FReD')).to.equal('FReD');
    });

    it('should return single character to uppercase from lowercase', () => {
        expect(upperFirst('f')).to.equal('F');
    });

    it('should return single character to uppercase from uppercase', () => {
        expect(upperFirst('F')).to.equal('F');
    });   

});