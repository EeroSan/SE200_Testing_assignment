
/**
 * Unit tests for the `getTag` function.
 * 
 * The `getTag` function is expected to return a string representing the internal 
 * `[[Class]]` property of the given value. The tests cover various data types 
 * including numbers, strings, booleans, undefined, null, objects, arrays, 
 * functions, dates, and regular expressions.
 * 
 */

import { expect } from 'chai';
import getTag from '../src/.internal/getTag.js';

describe('getTag', function() {
    it('should return [object Number] for numbers', function() {
        expect(getTag(1)).to.equal('[object Number]');
        expect(getTag(NaN)).to.equal('[object Number]');
    });

    it('should return [object String] for strings', function() {
        expect(getTag('abc')).to.equal('[object String]');
    });

    it('should return [object Boolean] for booleans', function() {
        expect(getTag(true)).to.equal('[object Boolean]');
        expect(getTag(false)).to.equal('[object Boolean]');
    });

    it('should return [object Undefined] for undefined', function() {
        expect(getTag(undefined)).to.equal('[object Undefined]');
    });

    it('should return [object Null] for null', function() {
        expect(getTag(null)).to.equal('[object Null]');
    });

    it('should return [object Object] for objects', function() {
        expect(getTag({})).to.equal('[object Object]');
    });

    it('should return [object Array] for arrays', function() {
        expect(getTag([])).to.equal('[object Array]');
    });

    it('should return [object Function] for functions', function() {
        expect(getTag(function() {})).to.equal('[object Function]');
    });

    it('should return [object Date] for dates', function() {
        expect(getTag(new Date())).to.equal('[object Date]');
    });

    it('should return [object RegExp] for regular expressions', function() {
        expect(getTag(/abc/)).to.equal('[object RegExp]');
    });
});