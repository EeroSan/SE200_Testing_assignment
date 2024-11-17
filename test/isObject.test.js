/**
 * Test suite for the isObject function.
 * 
 * This suite contains tests to verify the behavior of the isObject function
 * with various types of inputs, including plain objects, arrays, functions,
 * instances of classes, and primitive values such as null, undefined, numbers,
 * strings, boolean values, and symbols.
 * 
 * The expected behavior is as follows:
 * - Plain objects, arrays, functions, and instances of classes should return true.
 * - Null, undefined, numbers, strings, boolean values, and symbols should return false.
 * 
 * @file isObject.test.js
 */
import chai from "chai"
import isObject from '../src/isObject.js';

const expect = chai.expect

describe('isObject', function () {
    it('0 should return true for plain objects', function () {
        expect(isObject({})).to.be.true;
    });

    it('1 should return true for arrays', function () {
        expect(isObject([])).to.be.true;
    });

    it('2 should return true for functions', function () {
        expect(isObject(function() {})).to.be.true;
    });

    it('3 should return true for instances of classes', function () {
        class MyClass {}
        expect(isObject(new MyClass())).to.be.true;
    });

    it('4 should return false for null', function () {
        expect(isObject(null)).to.be.false;
    });

    it('5 should return false for undefined', function () {
        expect(isObject(undefined)).to.be.false;
    });

    it('6 should return false for numbers', function () {
        expect(isObject(42)).to.be.false;
    });

    it('7 should return false for strings', function () {
        expect(isObject('string')).to.be.false;
    });

    it('8 should return false for boolean values', function () {
        expect(isObject(true)).to.be.false;
    });

    it('9 should return false for symbols', function () {
        expect(isObject(Symbol())).to.be.false;
    });
});