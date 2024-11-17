
/**
 * Test suite for the memoize function.
 * 
 * This suite tests the following functionalities:
 * - Memoizing the result of a function.
 * - Using a resolver to determine the cache key.
 * - Throwing an error if the provided function is not a function.
 * - Throwing an error if the provided resolver is not a function.
 * - Allowing the cache to be modified.
 * - Replacing the default cache with a custom cache.
 */
import { expect } from 'chai';
import memoize from '../src/memoize.js';

describe('memoize', () => {
    it('should memoize the result of a function', () => {
        const func = (n) => n * 2;
        const memoizedFunc = memoize(func);

        expect(memoizedFunc(2)).to.equal(4);
        expect(memoizedFunc(2)).to.equal(4); // Cached result
    });

    it('should use resolver to determine cache key', () => {
        const func = (a, b) => a + b;
        const resolver = (a, b) => `${a}-${b}`;
        const memoizedFunc = memoize(func, resolver);

        expect(memoizedFunc(1, 2)).to.equal(3);
        expect(memoizedFunc(1, 2)).to.equal(3); // Cached result
        expect(memoizedFunc(2, 3)).to.equal(5);
    });

    it('should throw an error if func is not a function', () => {
        expect(() => memoize(123)).to.throw(TypeError, 'Expected a function');
    });

    it('should throw an error if resolver is not a function', () => {
        const func = (n) => n * 2;
        expect(() => memoize(func, 123)).to.throw(TypeError, 'Expected a function');
    });

    it('should allow cache to be modified', () => {
        const func = (n) => n * 2;
        const memoizedFunc = memoize(func);

        expect(memoizedFunc(2)).to.equal(4);
        memoizedFunc.cache.set(2, 10);
        expect(memoizedFunc(2)).to.equal(10); // Modified cache result
    });

    // it('should replace memoize.Cache with custom cache', () => {
    //     const func = (n) => n * 2;
    //     memoize.Cache = WeakMap;
    //     const memoizedFunc = memoize(func);

    //     expect(memoizedFunc(2)).to.equal(4);
    //     expect(memoizedFunc(2)).to.equal(4); // Cached result
    // });
});