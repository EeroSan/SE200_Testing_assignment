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
    it('should return NaN for null', function () {
        expect(toNumber(null)).to.be.NaN;
    });
});

