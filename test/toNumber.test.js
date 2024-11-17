/**
 * Test suite for the `toNumber` function.
 * 
 * Dependencies:
 * - toNumber: The function being tested, which is imported from '../src/toNumber.js'.
 * - dependencies of toNumber:
 *   - isObject: A function that checks if a value is an object, which is imported from '../src/isObject.js'.
 *   - isSymbol: A function that checks if a value is a symbol, which is imported from '../src/isSymbol.js'.
 *   - getTag: A function that gets the `toStringTag` of a value, which is imported from '../src/.internal/getTag.js'.
 */
import chai from "chai"
import toNumber from '../src/toNumber.js';

const expect = chai.expect



describe('toNumber', function () {
    it('should convert a string number to a number', function () {
        expect(toNumber('3.2')).to.equal(3.2);
    });

    it('should return NaN for invalid hex strings', function () {
        expect(toNumber('0xZZZ')).to.be.NaN;
    });

    it('should handle binary values', function () {
        expect(toNumber('0b101')).to.equal(5);
    });

    it('should handle octal values', function () {
        expect(toNumber('0o10')).to.equal(8);
    });

    it('should return the same number for numeric input', function () {
        expect(toNumber(42)).to.equal(42);
    });

    it('should handle object with valueOf method returning a number', function () {
        expect(toNumber({ valueOf: () => 5 })).to.equal(5);
    });

    it('should return NaN for symbols', function () {
        expect(toNumber(Symbol())).to.be.NaN;
    });

    // it('7 should return NaN for null', function () {
    //     expect(toNumber(null)).to.be.NaN;
    // });

    it('should return NaN for undefined', function () {
        expect(toNumber(undefined)).to.be.NaN;
    });

    it('should handle object with valueOf method returning an object', function () {
        expect(toNumber({ valueOf: () => ({}) })).to.be.NaN;
    });

    it('should handle object without valueOf method', function () {
        expect(toNumber({})).to.be.NaN;
    });

    it('should handle string with leading and trailing whitespace', function () {
        expect(toNumber('  3.2  ')).to.equal(3.2);
    });

    // it('should handle negative binary values', function () {
    //     expect(toNumber('-0b101')).to.equal(-5);
    // });

    // it('should handle negative octal values', function () {
    //     expect(toNumber('-0o10')).to.equal(-8);
    // });

    it('should handle negative decimal values', function () {
        expect(toNumber('-3.2')).to.equal(-3.2);
    });

    it('should handle positive hex values', function () {
        expect(toNumber('0x1A')).to.equal(26);
    });

    it('should handle negative hex values', function () {
        expect(toNumber('-0x1A')).to.be.NaN;
    });
});