import chai from "chai"
import toNumber from '../src/toNumber.js';

const expect = chai.expect

describe('toNumber', function () {
    it('0 should convert a string number to a number', function () {
        expect(toNumber('3.2')).to.equal(3.2);
    });

    it('1 should return NaN for invalid hex strings', function () {
        expect(toNumber('0xZZZ')).to.be.NaN;
    });

    it('2 should handle binary values', function () {
        expect(toNumber('0b101')).to.equal(5);
    });

    it('3 should handle octal values', function () {
        expect(toNumber('0o10')).to.equal(8);
    });

    it('4 should return the same number for numeric input', function () {
        expect(toNumber(42)).to.equal(42);
    });

    it('5 should handle object with valueOf method returning a number', function () {
        expect(toNumber({ valueOf: () => 5 })).to.equal(5);
    });

    it('6 should return NaN for symbols', function () {
        expect(toNumber(Symbol())).to.be.NaN;
    });

    it('7 should return NaN for null', function () {
        expect(toNumber(null)).to.be.NaN;
    });

    it('8 should return NaN for undefined', function () {
        expect(toNumber(undefined)).to.be.NaN;
    });

    it('9 should handle object with valueOf method returning an object', function () {
        expect(toNumber({ valueOf: () => ({}) })).to.be.NaN;
    });

    it('10 should handle object without valueOf method', function () {
        expect(toNumber({})).to.be.NaN;
    });

    it('11 should handle string with leading and trailing whitespace', function () {
        expect(toNumber('  3.2  ')).to.equal(3.2);
    });

    it('12 should handle negative binary values', function () {
        expect(toNumber('-0b101')).to.equal(-5);
    });

    it('13 should handle negative octal values', function () {
        expect(toNumber('-0o10')).to.equal(-8);
    });

    it('14 should handle negative decimal values', function () {
        expect(toNumber('-3.2')).to.equal(-3.2);
    });

    it('15 should handle positive hex values', function () {
        expect(toNumber('0x1A')).to.equal(26);
    });

    it('16 should handle negative hex values', function () {
        expect(toNumber('-0x1A')).to.be.NaN;
    });
});