import { expect } from 'chai';
import words from '../src/words.js';

describe('words', () => {
    it('should split a string into words', () => {
        const result = words('fred, barney, & pebbles');
        expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
    });

    it('should split a string into words with a custom pattern', () => {
        const result = words('fred, barney, & pebbles', /[^, ]+/g);
        expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });

    it('should return an empty array for an empty string', () => {
        const result = words('');
        expect(result).to.deep.equal([]);
    });

    it('should handle strings with unicode characters', () => {
        const result = words('你好，世界');
        expect(result).to.deep.equal(['你好', '世界']);
    });

    it('should handle strings with numbers', () => {
        const result = words('abc123 def456');
        expect(result).to.deep.equal(['abc123', 'def456']);
    });

    it('should handle strings with special characters', () => {
        const result = words('hello-world');
        expect(result).to.deep.equal(['hello', 'world']);
    });

    it('should handle strings with mixed case', () => {
        const result = words('HelloWorld');
        expect(result).to.deep.equal(['Hello', 'World']);
    });
});