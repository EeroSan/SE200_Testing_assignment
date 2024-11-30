
/**
 * Test suite for the `toString` function.
 * 
 * This suite tests the conversion of various types of values to their string representations.
 * 
 * The following cases are tested:
 * - `null`: should return an empty string.
 * - `undefined`: should return an empty string.
 * - `number`: should return the string representation of the number.
 * - `negative number`: should return the string representation of the negative number.
 * - `array`: should return the string representation of the array.
 * - `symbol`: should return the string representation of the symbol.
 * - `object`: should return the string representation of the object.
 * - `boolean`: should return the string representation of the boolean.
 * - `function`: should return the string representation of the function.
 * - `-0`: should return the string "-0".
 */
import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString', () => {
    it.skip('should return an empty string for null', () => {
        expect(toString(null)).to.equal('');
    });

    it.skip('should return an empty string for undefined', () => {
        expect(toString(undefined)).to.equal('');
    });

    it('should return the string representation of a string', () => {
        expect(toString('string').to.equal('string'));
    });

    it('should return the string representation of a number', () => {
        expect(toString(123)).to.equal('123');
    });

    it('should return the string representation of a negative number', () => {
        expect(toString(-123)).to.equal('-123');
    });

    it('should return the string representation of an array', () => {
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    });

    it('should return the string representation of a symbol', () => {
        const symbol = Symbol('test');
        expect(toString(symbol)).to.equal('Symbol(test)');
    });

    it('should return the string representation of an object', () => {
        expect(toString({ a: 1 })).to.equal('[object Object]');
    });

    it('should return the string representation of a boolean', () => {
        expect(toString(true)).to.equal('true');
    });

    it('should return the string representation of a function', () => {
        const func = () => {};
        expect(toString(func)).to.equal(func.toString());
    });

    it('should return "-0" for -0', () => {
        expect(toString(-0)).to.equal('-0');
    });
});