/**
 * Test suite for the camelCase function
 * 
 * This suite tests the get function from the '../src/camelCase.js' module
 * It uses the 'chai' library for assertions.
 * 
 * The tests cover the following scenarios:
 *  - converting to camelCase from separated words
 *  - converting to camelCase from CAPS WORDS
 *  - converting to camelCase from word-with-separation-lines
 *  - converting to camelCase from words_with_underscore
 *  - 
 */

import {expect} from 'chai';
import camelCase from '../src/camelCase.js'

describe('camelCase', () => { 

    // tests for edge cases
    it.skip('should return empty string for empty input', () => {
        expect(camelCase('')).to.equal('');
    });

    it.skip('should return single-word-input as one word all lowercase', () => {
        expect(camelCase('FOO')).to.equal('foo');
    });

    // tests for working cases
    it.skip('should return camelCase of separated words', () => {
        expect(camelCase('Foo Bar')).to.equal('fooBar');
    });

    it.skip('should return camelCase of CAPS WORDS', () => {
        expect(camelCase('FOO BAR')).to.equal('fooBar');
    });

    it.skip('should return camelCase of underscore_words', () => {
        expect(camelCase('Foo_Bar')).to.equal('fooBar');
    });

    it.skip('should return camelCase of words with extra lines', () => {
        expect(camelCase('---Foo-Bar---')).to.equal('fooBar');
    });

    it.skip('should return camelCase of words with extra underscores', () => {
        expect(camelCase('___Foo_Bar___')).to.equal('fooBar');
    });

    it.skip('should return camelCase for mixed spearators', () => {
        expect(camelCase('foo_bar-test')).to.equal('fooBarTest');
    });

});