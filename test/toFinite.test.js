
/**
 * Test suite for the `toFinite` function.
 * 
 * The `toFinite` function is expected to convert various inputs to finite numbers.
 * This test suite includes tests for:
 * - Converting a number to a finite number.
 * - Converting `Number.MIN_VALUE` to a finite number.
 * - Converting `Infinity` to `MAX_INTEGER`.
 * - Converting `-Infinity` to `-MAX_INTEGER`.
 * - Converting a string number to a finite number.
 * - Converting `null` to 0.
 * - Converting `undefined` to 0.
 * - Converting `NaN` to 0.
 * - Converting an object to 0.
 * - Converting an array to 0.
 * - Converting a boolean to 0 (true to 1, false to 0).
 */
import { expect } from 'chai';
import toFinite from '../src/toFinite.js';

describe('toFinite', function() {
    it('should convert a number to a finite number', function() {
        expect(toFinite(3.2)).to.equal(3.2);
    });

    it('should convert MIN_VALUE to a finite number', function() {
        expect(toFinite(Number.MIN_VALUE)).to.equal(5e-324);
    });

    it('should convert Infinity to MAX_INTEGER', function() {
        expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308);
    });

    it('should convert -Infinity to -MAX_INTEGER', function() {
        expect(toFinite(-Infinity)).to.equal(-1.7976931348623157e+308);
    });

    it('should convert a string number to a finite number', function() {
        expect(toFinite('3.2')).to.equal(3.2);
    });

    it('should convert null to 0', function() {
        expect(toFinite(null)).to.equal(0);
    });

    it('should convert undefined to 0', function() {
        expect(toFinite(undefined)).to.equal(0);
    });

    it('should convert NaN to 0', function() {
        expect(toFinite(NaN)).to.equal(0);
    });

    it('should convert an object to 0', function() {
        expect(toFinite({})).to.equal(0);
    });

    it('should convert an array to 0', function() {
        expect(toFinite([])).to.equal(0);
    });

    it('should convert a boolean to 0', function() {
        expect(toFinite(true)).to.equal(1);
        expect(toFinite(false)).to.equal(0);
    });

    it('should convert empty string to 0', function() {
        expect(toFinite('')).to.equal(0);
    });
});