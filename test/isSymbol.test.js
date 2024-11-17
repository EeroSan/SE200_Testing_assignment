
/**
 * Test suite for the isSymbol function.
 * 
 * This suite contains various test cases to verify the behavior of the isSymbol function
 * with different types of input values. The isSymbol function is expected to return true
 * for symbol values and false for all other types of values.
 * 
 * Test cases:
 * - Symbol values should return true.
 * - String values should return false.
 * - Number values should return false.
 * - Object values should return false.
 * - Array values should return false.
 * - Null should return false.
 * - Undefined should return false.
 * - Boolean values should return false.
 * - Function values should return false.
 * - BigInt values should return false.
 */

import chai from "chai"
import isSymbol from '../src/isSymbol.js';

const expect = chai.expect

describe('isSymbol', function () {
    it('0 should return true for symbol values', function () {
        expect(isSymbol(Symbol())).to.be.true;
    });

    it('1 should return false for string values', function () {
        expect(isSymbol('string')).to.be.false;
    });

    it('2 should return false for number values', function () {
        expect(isSymbol(123)).to.be.false;
    });

    it('3 should return false for object values', function () {
        expect(isSymbol({})).to.be.false;
    });

    it('4 should return false for array values', function () {
        expect(isSymbol([])).to.be.false;
    });

    it('5 should return false for null', function () {
        expect(isSymbol(null)).to.be.false;
    });

    it('6 should return false for undefined', function () {
        expect(isSymbol(undefined)).to.be.false;
    });

    it('7 should return false for boolean values', function () {
        expect(isSymbol(true)).to.be.false;
        expect(isSymbol(false)).to.be.false;
    });

    it('8 should return false for function values', function () {
        expect(isSymbol(function() {})).to.be.false;
    });

    it('9 should return false for BigInt values', function () {
        expect(isSymbol(BigInt(123))).to.be.false;
    });
});