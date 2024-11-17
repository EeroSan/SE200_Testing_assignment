
/**
 * @fileoverview Unit tests for the add function.
 * 
 * This file contains a series of tests to verify the correct functionality of the add function.
 * The tests cover various scenarios including:
 * - Adding two positive numbers
 * - Adding two negative numbers
 * - Adding a positive and a negative number
 * - Adding zero to a number
 * - Adding a number to zero
 * - Adding two zeros
 * - Adding floating point numbers
 * - Adding very large numbers
 * - Adding very small numbers
 * 
 * The tests use the Chai assertion library to validate the results.
 * 
 * @requires chai.expect
 * @requires ../src/add.js
 */
import { expect } from 'chai';
import add from '../src/add.js';

describe('add', () => {
    it('should add two positive numbers', () => {
        expect(add(6, 4)).to.equal(10);
    });

    it('should add two negative numbers', () => {
        expect(add(-6, -4)).to.equal(-10);
    });

    it('should add a positive and a negative number', () => {
        expect(add(6, -4)).to.equal(2);
    });

    it('should add zero to a number', () => {
        expect(add(6, 0)).to.equal(6);
    });

    it('should add a number to zero', () => {
        expect(add(0, 4)).to.equal(4);
    });

    it('should add two zeros', () => {
        expect(add(0, 0)).to.equal(0);
    });

    it('should handle adding floating point numbers', () => {
        expect(add(1.5, 2.3)).to.be.closeTo(3.8, 0.0001);
    });

    it('should handle adding very large numbers', () => {
        expect(add(1e+308, 1e+308)).to.equal(Infinity);
    });

    it('should handle adding very small numbers', () => {
        expect(add(1e-308, 1e-308)).to.be.closeTo(2e-308, 1e-310);
    });
});