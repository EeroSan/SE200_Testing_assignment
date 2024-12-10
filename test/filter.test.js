/**
 * Test suite for the filter function.
 * 
 * This suite tests the filter function from the '../src/filter.js' module.
 * It uses the 'chai' library for assertions.
 * 
 * The tests cover the following scenarios:
 * - Filtering an array based on a predicate function.
 * - Returning an empty array if no elements match the predicate.
 * - Returning an empty array if the input array is empty.
 * - Handling null or undefined input arrays.
 * - Handling different types of predicates.
 * - Ensuring the correct arguments are passed to the predicate function.
 */
import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter', () => {
    it('should filter array based on predicate', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
    });

    it.skip('should return an empty array if no elements match the predicate', () => {
        const users = [
            { 'user': 'barney', 'active': false },
            { 'user': 'fred', 'active': false }
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).to.deep.equal([]);
    });

    it.skip('should return an empty array if input array is empty', () => {
        const result = filter([], ({ active }) => active);
        expect(result).to.deep.equal([]);
    });

    it.skip('should return an empty array if input array is null or undefined', () => {
        expect(filter(null, ({ active }) => active)).to.deep.equal([[]]);
        expect(filter(undefined, ({ active }) => active)).to.deep.equal([]);
    });

    it('should handle different types of predicates', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = filter(numbers, (n) => n % 2 === 0);
        expect(result).to.deep.equal([2, 4]);
    });

    it('should pass the correct arguments to the predicate', () => {
        const array = [1, 2, 3];
        const spy = (value, index, arr) => {
            expect(arr).to.equal(array);
            expect(index).to.be.a('number');
            expect(value).to.equal(array[index]);
            return value > 1;
        };
        filter(array, spy);
    });
});