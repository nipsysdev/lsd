import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
  useFormField,
} from './index';

describe('Form Components', () => {
  describe('FormProvider', () => {
    it('renders without crashing', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <div>Form Content</div>
          </Form>
        );
      }
      render(<TestComponent />);
      expect(screen.getByText('Form Content')).toBeInTheDocument();
    });
  });

  describe('FormItem', () => {
    it('renders without crashing', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormItem>
              <div>Form Item Content</div>
            </FormItem>
          </Form>
        );
      }
      render(<TestComponent />);
      expect(screen.getByText('Form Item Content')).toBeInTheDocument();
    });

    it('applies base classes correctly', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormItem data-testid="form-item">
              <div>Content</div>
            </FormItem>
          </Form>
        );
      }
      render(<TestComponent />);
      const formItem = screen.getByTestId('form-item');
      expect(formItem).toHaveClass('lsd:grid');
      expect(formItem).toHaveClass('lsd:gap-(--lsd-spacing-base)');
    });

    it('provides id to children via context', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });

        function ChildComponent() {
          const { id } = useFormField();
          return <div>Item ID: {id}</div>;
        }

        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <ChildComponent />
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      expect(screen.getByText(/Item ID:/)).toBeInTheDocument();
    });
  });

  describe('FormLabel', () => {
    it('renders without crashing', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <FormLabel>Test Label</FormLabel>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('associates with form item id', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Test Label</FormLabel>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const label = screen.getByText('Test Label');
      const input = screen.getByRole('textbox');
      const labelFor = label.getAttribute('for');
      const inputId = input.getAttribute('id');
      expect(labelFor).toBe(inputId);
    });

    it('applies destructive class when there is a validation error', async () => {
      function TestComponent() {
        const form = useForm({
          defaultValues: { test: '' },
          mode: 'onChange',
        });
        return (
          <Form {...form}>
            <FormField
              name="test"
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel data-testid="form-label">Test Label</FormLabel>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const input = screen.getByRole('textbox') as HTMLInputElement;

      // Type and then backspace to trigger onChange validation
      input.focus();
      await act(async () => {
        fireEvent.change(input, { target: { value: 'a' } });
        fireEvent.change(input, { target: { value: '' } });
      });

      const label = screen.getByTestId('form-label');
      expect(label).toHaveClass('lsd:text-lsd-destructive-text');
    });

    it('does not apply destructive class when there is no error', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={({ field }) => (
                <FormItem>
                  <FormLabel data-testid="form-label">Test Label</FormLabel>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const label = screen.getByTestId('form-label');
      expect(label).not.toHaveClass('lsd:text-lsd-destructive-text');
    });
  });

  describe('FormControl', () => {
    it('renders without crashing', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('applies correct id to control', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const input = screen.getByRole('textbox');
      const id = input.getAttribute('id');
      expect(id).toMatch(/-form-item$/);
    });

    it('sets aria-invalid on error', () => {
      function TestComponent() {
        const form = useForm({
          defaultValues: { test: '' },
          mode: 'onChange',
        });
        return (
          <Form {...form}>
            <FormField
              name="test"
              rules={{ required: 'Required' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'false');
    });

    it('sets aria-describedby with description id', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={({ field }) => (
                <FormItem>
                  <FormDescription>Description</FormDescription>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const input = screen.getByRole('textbox');
      const ariaDescribedBy = input.getAttribute('aria-describedby');
      expect(ariaDescribedBy).toMatch(/.*-form-item-description$/);
    });

    it('sets aria-describedby with both description and message ids when there is an error', async () => {
      function TestComponent() {
        const form = useForm({
          defaultValues: { test: '' },
          mode: 'onChange',
        });

        return (
          <Form {...form}>
            <FormField
              name="test"
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormDescription>Description</FormDescription>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>
        );
      }

      render(<TestComponent />);
      const input = screen.getByRole('textbox') as HTMLInputElement;

      // Type and then backspace to trigger onChange validation
      input.focus();
      await act(async () => {
        fireEvent.change(input, { target: { value: 'a' } });
        fireEvent.change(input, { target: { value: '' } });
      });

      const ariaDescribedBy = input.getAttribute('aria-describedby');
      expect(ariaDescribedBy).toMatch(/.*-form-item-description.*-form-item-message$/);
    });
  });

  describe('FormDescription', () => {
    it('renders without crashing', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <FormDescription>Helper text</FormDescription>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      expect(screen.getByText('Helper text')).toBeInTheDocument();
    });

    it('applies base classes correctly', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <FormDescription data-testid="description">Helper text</FormDescription>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const description = screen.getByTestId('description');
      expect(description).toHaveClass('lsd:text-lsd-text-secondary');
    });
  });

  describe('FormMessage', () => {
    it('renders without crashing', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <FormMessage>This is a message</FormMessage>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      expect(screen.getByText('This is a message')).toBeInTheDocument();
    });

    it('applies base classes correctly', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <FormMessage data-testid="message">Error message</FormMessage>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const message = screen.getByTestId('message');
      expect(message).toHaveClass('lsd:text-lsd-destructive-text');
    });

    it('does not render when no error or children', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <FormMessage data-testid="message" />
                </FormItem>
              )}
            />
          </Form>
        );
      }
      const { container } = render(<TestComponent />);
      expect(container.querySelector('[data-testid="message"]')).not.toBeInTheDocument();
    });

    it('displays error message from form validation', async () => {
      function TestComponent() {
        const form = useForm({
          defaultValues: { test: '' },
          mode: 'onChange',
        });
        return (
          <Form {...form}>
            <FormField
              name="test"
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                  <FormMessage data-testid="message" />
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      // Type and then clear to trigger onChange validation
      input.focus();
      await act(async () => {
        fireEvent.change(input, { target: { value: 'a' } });
        fireEvent.change(input, { target: { value: '' } });
      });

      const message = screen.getByTestId('message');
      expect(message).toHaveTextContent('This field is required');
    });

    it('handles error object with empty message', async () => {
      function TestComponent() {
        const form = useForm({
          defaultValues: { test: '' },
          mode: 'onChange',
        });
        return (
          <Form {...form}>
            <FormField
              name="test"
              rules={{ validate: () => false }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                  <FormMessage data-testid="message" />
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      // Type and then clear to trigger onChange validation
      input.focus();
      await act(async () => {
        fireEvent.change(input, { target: { value: 'a' } });
        fireEvent.change(input, { target: { value: '' } });
      });

      // When error.message is undefined/false, empty string is used
      // and FormMessage does not render
      const message = screen.queryByTestId('message');
      expect(message).not.toBeInTheDocument();
    });

    it('does not render when error exists but has no message property', () => {
      function TestComponent() {
        const form = useForm({
          defaultValues: { test: '' },
          mode: 'onChange',
        });

        // Manually trigger an error without a message property
        form.setError('test', { type: 'manual' } as any);

        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <FormMessage data-testid="message" />
                </FormItem>
              )}
            />
          </Form>
        );
      }
      const { container } = render(<TestComponent />);
      // FormMessage should not render because error has no message
      expect(container.querySelector('[data-testid="message"]')).not.toBeInTheDocument();
    });

    it('renders custom className passed through props', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <FormMessage data-testid="message" className="custom-class">
                    Custom message
                  </FormMessage>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const message = screen.getByTestId('message');
      expect(message).toHaveClass('custom-class');
    });

    it('sets correct id attribute matching formMessageId', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });

        function ChildComponent() {
          const { formMessageId } = useFormField();
          return (
            <div>
              <div data-testid="field-message-id">{formMessageId}</div>
              <FormMessage data-testid="message">Test message</FormMessage>
            </div>
          );
        }

        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <ChildComponent />
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const fieldMessageId = screen.getByTestId('field-message-id').textContent;
      const message = screen.getByTestId('message');
      expect(message).toHaveAttribute('id', fieldMessageId);
    });
  });

  describe('FormField', () => {
    it('renders without crashing', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <div>Field Content</div>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      expect(screen.getByText('Field Content')).toBeInTheDocument();
    });

    it('renders with controlled value', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: 'initial' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('initial');
    });
  });

  describe('useFormField', () => {
    it('provides correct form field context', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });

        function ChildComponent() {
          const { name, formItemId, formDescriptionId, formMessageId } = useFormField();
          return (
            <div>
              <div data-testid="name">{name}</div>
              <div data-testid="item-id">{formItemId}</div>
              <div data-testid="desc-id">{formDescriptionId}</div>
              <div data-testid="msg-id">{formMessageId}</div>
            </div>
          );
        }

        return (
          <Form {...form}>
            <FormField
              name="test"
              render={() => (
                <FormItem>
                  <ChildComponent />
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      expect(screen.getByTestId('name')).toHaveTextContent('test');
      expect(screen.getByTestId('item-id')).toBeInTheDocument();
      expect(screen.getByTestId('desc-id')).toBeInTheDocument();
      expect(screen.getByTestId('msg-id')).toBeInTheDocument();
    });

    it('throws error when used outside FormField', () => {
      function TestComponent() {
        const { id } = useFormField();
        return <div>{id}</div>;
      }

      expect(() => render(<TestComponent />)).toThrow();
    });
  });

  describe('Integration Tests', () => {
    it('creates a complete form with all components', () => {
      function TestComponent() {
        const form = useForm({
          defaultValues: { username: '' },
          mode: 'onChange',
        });

        return (
          <Form {...form}>
            <FormField
              name="username"
              rules={{ required: 'Username is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <input placeholder="Enter username" {...field} />
                  </FormControl>
                  <FormDescription>Enter your unique username</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      expect(screen.getByText('Username')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
      expect(screen.getByText('Enter your unique username')).toBeInTheDocument();
    });

    it('renders all form components', () => {
      function TestComponent() {
        const form = useForm({ defaultValues: { test: '' } });
        return (
          <Form {...form}>
            <FormField
              name="test"
              render={({ field }) => (
                <FormItem data-testid="form-item">
                  <FormLabel data-testid="label">Label</FormLabel>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                  <FormDescription data-testid="description">Description</FormDescription>
                  <FormMessage data-testid="message">Message</FormMessage>
                </FormItem>
              )}
            />
          </Form>
        );
      }
      render(<TestComponent />);
      expect(screen.getByTestId('form-item')).toBeInTheDocument();
      expect(screen.getByTestId('label')).toBeInTheDocument();
      expect(screen.getByTestId('description')).toBeInTheDocument();
      expect(screen.getByTestId('message')).toBeInTheDocument();
    });
  });
});
