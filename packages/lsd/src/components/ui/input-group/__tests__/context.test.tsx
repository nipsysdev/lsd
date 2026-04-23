import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { InputGroupProvider, useInputGroup } from '../context';

describe('InputGroupContext', () => {
  describe('useInputGroup', () => {
    it('throws error when used outside InputGroupProvider', () => {
      // Arrange & Act & Assert
      expect(() => {
        const TestComponent = () => {
          const context = useInputGroup();
          return <div>Size: {context.size}</div>;
        };
        render(<TestComponent />);
      }).toThrow('useInputGroup must be used within an InputGroupProvider');
    });

    it('returns context value when used within InputGroupProvider', () => {
      // Arrange
      const TestComponent = () => {
        const context = useInputGroup();
        return <span data-testid="size">{context.size}</span>;
      };

      // Act
      render(
        <InputGroupProvider size="md">
          <TestComponent />
        </InputGroupProvider>
      );

      // Assert
      expect(screen.getByTestId('size')).toHaveTextContent('md');
    });

    it('returns correct size value for small size', () => {
      // Arrange
      const TestComponent = () => {
        const context = useInputGroup();
        return <span data-testid="size">{context.size}</span>;
      };

      // Act
      render(
        <InputGroupProvider size="sm">
          <TestComponent />
        </InputGroupProvider>
      );

      // Assert
      expect(screen.getByTestId('size')).toHaveTextContent('sm');
    });

    it('returns correct size value for medium size', () => {
      // Arrange
      const TestComponent = () => {
        const context = useInputGroup();
        return <span data-testid="size">{context.size}</span>;
      };

      // Act
      render(
        <InputGroupProvider size="md">
          <TestComponent />
        </InputGroupProvider>
      );

      // Assert
      expect(screen.getByTestId('size')).toHaveTextContent('md');
    });

    it('returns correct size value for large size', () => {
      // Arrange
      const TestComponent = () => {
        const context = useInputGroup();
        return <span data-testid="size">{context.size}</span>;
      };

      // Act
      render(
        <InputGroupProvider size="lg">
          <TestComponent />
        </InputGroupProvider>
      );

      // Assert
      expect(screen.getByTestId('size')).toHaveTextContent('lg');
    });
  });

  describe('InputGroupProvider', () => {
    it('renders children correctly', () => {
      // Arrange
      const TestComponent = () => {
        const context = useInputGroup();
        return <div>Size: {context.size}</div>;
      };

      // Act
      render(
        <InputGroupProvider size="md">
          <TestComponent />
        </InputGroupProvider>
      );

      // Assert
      expect(screen.getByText('Size: md')).toBeInTheDocument();
    });

    it('provides context to multiple children', () => {
      // Arrange
      const ChildComponent = ({ index }: { index: number }) => {
        const context = useInputGroup();
        return <span data-testid={`child-${index}`}>{context.size}</span>;
      };

      // Act
      render(
        <InputGroupProvider size="lg">
          <ChildComponent index={1} />
          <ChildComponent index={2} />
          <ChildComponent index={3} />
        </InputGroupProvider>
      );

      // Assert
      expect(screen.getByTestId('child-1')).toHaveTextContent('lg');
      expect(screen.getByTestId('child-2')).toHaveTextContent('lg');
      expect(screen.getByTestId('child-3')).toHaveTextContent('lg');
    });

    it('updates context when size changes', () => {
      // Arrange
      const TestComponent = () => {
        const context = useInputGroup();
        return <span data-testid="size">{context.size}</span>;
      };

      const { rerender } = render(
        <InputGroupProvider size="sm">
          <TestComponent />
        </InputGroupProvider>
      );

      // Assert initial size
      expect(screen.getByTestId('size')).toHaveTextContent('sm');

      // Act - rerender with different size
      rerender(
        <InputGroupProvider size="lg">
          <TestComponent />
        </InputGroupProvider>
      );

      // Assert updated size
      expect(screen.getByTestId('size')).toHaveTextContent('lg');
    });

    it('isolates context between different providers', () => {
      // Arrange
      const TestComponent = ({ label }: { label: string }) => {
        const context = useInputGroup();
        return (
          <div>
            <span data-testid={`${label}-size`}>{context.size}</span>
          </div>
        );
      };

      // Act
      render(
        <div>
          <InputGroupProvider size="sm">
            <TestComponent label="first" />
          </InputGroupProvider>
          <InputGroupProvider size="lg">
            <TestComponent label="second" />
          </InputGroupProvider>
        </div>
      );

      // Assert
      expect(screen.getByTestId('first-size')).toHaveTextContent('sm');
      expect(screen.getByTestId('second-size')).toHaveTextContent('lg');
    });
  });
});
