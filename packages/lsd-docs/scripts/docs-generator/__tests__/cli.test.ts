import { describe, expect, it } from 'vitest';
import { parseArgs, printError, printHelp } from '../cli';

describe('CLI', () => {
  describe('parseArgs', () => {
    it('should parse component name', () => {
      const args = ['my-component'];
      const result = parseArgs(args);

      expect(result.component).toBe('my-component');
      expect(result.all).toBe(false);
      expect(result.help).toBe(false);
    });

    it('should parse --all flag', () => {
      const args = ['--all'];
      const result = parseArgs(args);

      expect(result.all).toBe(true);
      expect(result.component).toBeNull();
      expect(result.help).toBe(false);
    });

    it('should parse --help flag', () => {
      const args = ['--help'];
      const result = parseArgs(args);

      expect(result.help).toBe(true);
      expect(result.component).toBeNull();
      expect(result.all).toBe(false);
    });

    it('should parse -h flag as help', () => {
      const args = ['-h'];
      const result = parseArgs(args);

      expect(result.help).toBe(true);
    });

    it('should parse component with flags', () => {
      const args = ['my-component', '--all'];
      const result = parseArgs(args);

      expect(result.component).toBe('my-component');
      expect(result.all).toBe(true);
    });

    it('should parse help with component', () => {
      const args = ['--help', 'my-component'];
      const result = parseArgs(args);

      expect(result.help).toBe(true);
      expect(result.component).toBe('my-component');
    });

    it('should return defaults for unknown flags', () => {
      const args = ['--unknown'];
      const result = parseArgs(args);

      expect(result.component).toBeNull();
      expect(result.all).toBe(false);
      expect(result.help).toBe(false);
    });

    it('should handle empty args', () => {
      const args: string[] = [];
      const result = parseArgs(args);

      expect(result.component).toBeNull();
      expect(result.all).toBe(false);
      expect(result.help).toBe(false);
    });
  });

  describe('printHelp', () => {
    it('should print help without throwing', () => {
      expect(() => printHelp()).not.toThrow();
    });

    it('should log help message', () => {
      const logSpy = vi.spyOn(console, 'log');
      printHelp();
      expect(logSpy).toHaveBeenCalled();
      // Clean up
      logSpy.mockRestore();
    });
  });

  describe('printError', () => {
    it('should print error message', () => {
      const logSpy = vi.spyOn(console, 'error');
      printError('Something went wrong');
      expect(logSpy).toHaveBeenCalled();
      // Clean up
      logSpy.mockRestore();
    });

    it('should prefix error with "Error:"', () => {
      const logSpy = vi.spyOn(console, 'error');
      printError('Test error');
      expect(logSpy).toHaveBeenCalledWith('Error: Test error');
      // Clean up
      logSpy.mockRestore();
    });
  });
});
