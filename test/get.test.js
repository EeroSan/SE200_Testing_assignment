/**
 * Test suite for the get function
 * 
 * This suite tests the get function from the '../src/get.js' module
 * It uses the 'chai' library for assertions.
 * 
 * The tests cover the following scenarios:
 *  - Retrieval of value with a valid string path
 *  - Retrieval of value with a valid array path
 *  - Retrieval of default value for non-existent path
 *  - Retrieval of default value if object is undefined or null
 *  - 
 */
import {expect} from 'chai';
import get from '../src/get.js'

describe('get', () => { 

    //tests when object is invalid
    it('should return undefined when object is undefined', () => {
        expect(get(undefined, 'a.b.c')).to.equal(undefined);
    });
       
    it('should return undefined when object is null', () => {
        expect(get(null, 'a.b.c')).to.equal(undefined);
    });
    
    // tests when everything is valid
    it('should return value when path is valid', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, 'a[0].b.c')).to.equal(3)
    });

    it('should return value when valid path is an array', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
    });

    // tests with an invalid path
    it('should return default value when path is invalid', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, 'a.b.c', 'default')).to.equal('default');
    });

    it('should return undefined when path is invalid and default is not specified', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, 'a.b.c')).to.equal(undefined);
    });

    // tests with an invalid value
    it('should return default value when value is null', () => {
        const object = { a: [{ b: { c: null } }] };
        expect(get(object, 'a[0].b.c', 'default')).to.equal('default');
    });

    it('should return default value when value is undefined', () => {
        const object = { a: [{ b: { c: undefined } }] };
        expect(get(object, 'a[0].b.c', 'default')).to.equal('default');
    });

    it('should return undefined when value is null and default is not specified', () => {
        const object = { a: [{ b: { c: null } }] };
        expect(get(object, 'a.b.c')).to.equal(undefined);
    });

    it('should return undefined when value is null and default is not specified', () => {
        const object = { a: [{ b: { c: undefined } }] };
        expect(get(object, 'a.b.c')).to.equal(undefined);
    });


});