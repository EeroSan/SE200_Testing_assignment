
/**
 * Test suite for the `map` function.
 * 
 * This suite tests the functionality of the `map` function from the '../src/map.js' module.
 * The `map` function is expected to apply a given iteratee function to each element in an array
 * and return a new array with the results.
 * 
 * The tests cover the following scenarios:
 * - Mapping values in an array using an iteratee function.
 * - Handling null or undefined input arrays.
 * - Handling empty arrays.
 * - Passing the correct arguments to the iteratee function.
 * - Handling non-numeric values.
 * - Handling complex objects.
 * 
 * @module test/map.test
 */
import { expect } from 'chai';
import map from '../src/map.js';

describe('map', function() {
    it('should map values in array using iteratee', function() {
        function square(n) {
            return n * n;
        }
        const result = map([4, 8], square);
        expect(result).to.deep.equal([16, 64]);
    });

    it('should return an empty array when input array is null or undefined', function() {
        function identity(n) {
            return n;
        }
        expect(map(null, identity)).to.deep.equal([]);
        expect(map(undefined, identity)).to.deep.equal([]);
    });

    it('should handle an empty array', function() {
        function identity(n) {
            return n;
        }
        expect(map([], identity)).to.deep.equal([]);
    });

    it('should pass the correct arguments to iteratee', function() {
        const array = [1, 2, 3];
        const iteratee = (value, index, arr) => {
            expect(value).to.equal(array[index]);
            expect(arr).to.equal(array);
            return value;
        };
        map(array, iteratee);
    });

    it('should handle non-numeric values', function() {
        function toUpper(str) {
            return str.toUpperCase();
        }
        const result = map(['a', 'b', 'c'], toUpper);
        expect(result).to.deep.equal(['A', 'B', 'C']);
    });

    it('should handle complex objects', function() {
        const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
        const iteratee = obj => obj.a;
        const result = map(array, iteratee);
        expect(result).to.deep.equal([1, 2, 3]);
    });
});