import { describe, expect, it } from 'vitest';
import {
  ComponentNotFoundError,
  DocumentationGeneratorError,
  handleError,
  InterfaceNotFoundError,
  logError,
  TSDocParsingError,
} from '../error-handler';

describe('ErrorHandler', () => {
  describe('DocumentationGeneratorError', () => {
    it('should create error with component, phase, and details', () => {
      const error = new DocumentationGeneratorError(
        'Button',
        'parsing',
        'Failed to parse component'
      );

      expect(error.name).toBe('DocumentationGeneratorError');
      expect(error.component).toBe('Button');
      expect(error.phase).toBe('parsing');
      expect(error.details).toBe('Failed to parse component');
      expect(error.message).toBe(
        'Failed to generate documentation for Button: [parsing] Failed to parse component'
      );
    });

    it('should handle different phases correctly', () => {
      const discoveryError = new DocumentationGeneratorError(
        'Alert',
        'discovery',
        'Component not found'
      );
      expect(discoveryError.phase).toBe('discovery');

      const generationError = new DocumentationGeneratorError(
        'Input',
        'generation',
        'Failed to generate page'
      );
      expect(generationError.phase).toBe('generation');
    });
  });

  describe('ComponentNotFoundError', () => {
    it('should create error for missing component', () => {
      const error = new ComponentNotFoundError('NonExistentComponent');

      expect(error.name).toBe('ComponentNotFoundError');
      expect(error.component).toBe('NonExistentComponent');
      expect(error.phase).toBe('discovery');
      expect(error.message).toContain('NonExistentComponent');
      expect(error.message).toContain('not found');
    });

    it('should inherit from DocumentationGeneratorError', () => {
      const error = new ComponentNotFoundError('TestComponent');
      expect(error).toBeInstanceOf(DocumentationGeneratorError);
    });
  });

  describe('InterfaceNotFoundError', () => {
    it('should create error for missing interface', () => {
      const error = new InterfaceNotFoundError('Button', 'ButtonProps');

      expect(error.name).toBe('InterfaceNotFoundError');
      expect(error.component).toBe('Button');
      expect(error.phase).toBe('parsing');
      expect(error.message).toContain('Button');
      expect(error.message).toContain('ButtonProps');
    });

    it('should include interface name in message', () => {
      const error = new InterfaceNotFoundError('Dialog', 'DialogContentProps');
      expect(error.message).toContain('DialogContentProps');
    });
  });

  describe('TSDocParsingError', () => {
    it('should create error with original error details', () => {
      const originalError = new Error('Invalid TSDoc syntax');
      const error = new TSDocParsingError('Accordion', originalError);

      expect(error.name).toBe('TSDocParsingError');
      expect(error.component).toBe('Accordion');
      expect(error.phase).toBe('parsing');
      expect(error.message).toContain('Accordion');
      expect(error.message).toContain('Invalid TSDoc syntax');
    });

    it('should preserve original stack trace', () => {
      const originalError = new Error('Parse error');
      const error = new TSDocParsingError('Calendar', originalError);

      expect(error.stack).toBe(originalError.stack);
    });

    it('should handle errors without stack trace', () => {
      const originalError = { message: 'No stack trace' } as Error;
      const error = new TSDocParsingError('Card', originalError);

      expect(error.name).toBe('TSDocParsingError');
    });
  });

  describe('logError', () => {
    it('should log error with all details', () => {
      const error = new DocumentationGeneratorError('Button', 'parsing', 'Test error');

      // Just verify it doesn't throw - console.error output is tested elsewhere
      expect(() => logError(error)).not.toThrow();
    });

    it('should log non-DocumentationGeneratorError', () => {
      const error = new Error('Regular error');

      expect(() => logError(error)).not.toThrow();
    });

    it('should log error with stack trace', () => {
      const error = new Error('Error with stack');
      error.stack = 'Stack trace here';

      expect(() => logError(error)).not.toThrow();
    });

    it('should log error without stack trace', () => {
      const error = new Error('Error without stack');
      delete error.stack;

      expect(() => logError(error)).not.toThrow();
    });
  });

  describe('handleError', () => {
    it('should log and rethrow error when suppress is false', () => {
      const error = new Error('Test error');

      expect(() => handleError(error, false)).toThrow(error);
    });

    it('should log but not throw when suppress is true', () => {
      const error = new Error('Test error');

      expect(() => handleError(error, true)).not.toThrow();
    });

    it('should handle DocumentationGeneratorError with suppress false', () => {
      const error = new ComponentNotFoundError('TestComponent');

      expect(() => handleError(error, false)).toThrow(error);
    });

    it('should handle DocumentationGeneratorError with suppress true', () => {
      const error = new ComponentNotFoundError('TestComponent');

      expect(() => handleError(error, true)).not.toThrow();
    });

    it('should default suppress to false', () => {
      const error = new Error('Default behavior');

      expect(() => handleError(error)).toThrow(error);
    });
  });
});
