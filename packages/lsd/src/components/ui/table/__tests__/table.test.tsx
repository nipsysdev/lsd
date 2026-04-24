import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it } from 'vitest';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../index';

const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe('Table', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(queryByDataSlot(container, 'table-container')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'table')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Table className="custom-class">
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const table = queryByDataSlot(container, 'table');
    expect(table).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const tableContainer = queryByDataSlot(container, 'table-container');
    const table = queryByDataSlot(container, 'table');
    expect(tableContainer).toHaveClass('lsd:relative');
    expect(tableContainer).toHaveClass('lsd:w-full');
    expect(tableContainer).toHaveClass('lsd:overflow-x-auto');
    expect(table).toHaveClass('lsd:w-full');
    expect(table).toHaveClass('lsd:caption-bottom');
    expect(table).toHaveClass('lsd:text-sm');
  });

  it('passes through additional props', () => {
    render(
      <Table data-testid="test-table" aria-label="Test table">
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('test-table')).toHaveAttribute('aria-label', 'Test table');
  });

  it('renders children', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Table content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Table content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTableElement>();
    render(
      <Table ref={ref}>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });
});

describe('TableHeader', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(queryByDataSlot(container, 'table-header')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Table>
        <TableHeader className="custom-class">
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const thead = queryByDataSlot(container, 'table-header');
    expect(thead).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const thead = queryByDataSlot(container, 'table-header');
    expect(thead).toHaveClass('lsd:[&_tr]:border-b');
  });

  it('passes through additional props', () => {
    render(
      <Table>
        <TableHeader data-testid="test-header">
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('test-header')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header content</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Header content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTableSectionElement>();
    render(
      <Table>
        <TableHeader ref={ref}>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableSectionElement);
  });
});

describe('TableBody', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(queryByDataSlot(container, 'table-body')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Table>
        <TableBody className="custom-class">
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const tbody = queryByDataSlot(container, 'table-body');
    expect(tbody).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const tbody = queryByDataSlot(container, 'table-body');
    expect(tbody).toHaveClass('lsd:[&_tr:last-child]:border-0');
  });

  it('passes through additional props', () => {
    render(
      <Table>
        <TableBody data-testid="test-body">
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('test-body')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Body content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Body content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTableSectionElement>();
    render(
      <Table>
        <TableBody ref={ref}>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableSectionElement);
  });
});

describe('TableFooter', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(queryByDataSlot(container, 'table-footer')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter className="custom-class">
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    const tfoot = queryByDataSlot(container, 'table-footer');
    expect(tfoot).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    const tfoot = queryByDataSlot(container, 'table-footer');
    expect(tfoot).toHaveClass('lsd:border-t');
    expect(tfoot).toHaveClass('lsd:bg-muted/50');
    expect(tfoot).toHaveClass('lsd:font-medium');
    expect(tfoot).toHaveClass('lsd:[&>tr]:last:border-b-0');
  });

  it('passes through additional props', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter data-testid="test-footer">
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByTestId('test-footer')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer content</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTableSectionElement>();
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter ref={ref}>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableSectionElement);
  });
});

describe('TableRow', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(queryByDataSlot(container, 'table-row')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow className="custom-class">
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const tr = queryByDataSlot(container, 'table-row');
    expect(tr).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const tr = queryByDataSlot(container, 'table-row');
    expect(tr).toHaveClass('lsd:border-b');
    expect(tr).toHaveClass('lsd:transition-colors');
    expect(tr).toHaveClass('lsd:hover:bg-muted/50');
    expect(tr).toHaveClass('lsd:data-[state=selected]:bg-muted');
  });

  it('passes through additional props', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="test-row">
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('test-row')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Row content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Row content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTableRowElement>();
    render(
      <Table>
        <TableBody>
          <TableRow ref={ref}>
            <TableCell>Row content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableRowElement);
  });
});

describe('TableHead', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(queryByDataSlot(container, 'table-head')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="custom-class">Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const th = queryByDataSlot(container, 'table-head');
    expect(th).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const th = queryByDataSlot(container, 'table-head');
    expect(th).toHaveClass('lsd:h-10');
    expect(th).toHaveClass('lsd:px-(--lsd-spacing-small)');
    expect(th).toHaveClass('lsd:text-left');
    expect(th).toHaveClass('lsd:align-middle');
    expect(th).toHaveClass('lsd:font-bold');
    expect(th).toHaveClass('lsd:whitespace-nowrap');
    expect(th).toHaveClass('lsd:text-lsd-text-primary');
  });

  it('passes through additional props', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead data-testid="test-head">Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('test-head')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Head content</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Head content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTableCellElement>();
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead ref={ref}>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableCellElement);
  });
});

describe('TableCell', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(queryByDataSlot(container, 'table-cell')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="custom-class">Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const td = queryByDataSlot(container, 'table-cell');
    expect(td).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const td = queryByDataSlot(container, 'table-cell');
    expect(td).toHaveClass('lsd:p-[var(--lsd-spacing-small)]');
    expect(td).toHaveClass('lsd:align-middle');
    expect(td).toHaveClass('lsd:whitespace-nowrap');
  });

  it('passes through additional props', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell data-testid="test-cell">Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('test-cell')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Cell content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTableCellElement>();
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell ref={ref}>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableCellElement);
  });
});

describe('TableCaption', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Table>
        <TableCaption>Caption text</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(queryByDataSlot(container, 'table-caption')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Table>
        <TableCaption className="custom-class">Caption text</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const caption = queryByDataSlot(container, 'table-caption');
    expect(caption).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(
      <Table>
        <TableCaption>Caption text</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const caption = queryByDataSlot(container, 'table-caption');
    expect(caption).toHaveClass('lsd:mt-[var(--lsd-spacing-base)]');
    expect(caption).toHaveClass('lsd:text-sm');
    expect(caption).toHaveClass('lsd:text-lsd-text-secondary');
  });

  it('passes through additional props', () => {
    render(
      <Table>
        <TableCaption data-testid="test-caption">Caption text</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('test-caption')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Table>
        <TableCaption>Caption content</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Caption content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTableCaptionElement>();
    render(
      <Table>
        <TableCaption ref={ref}>Caption text</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableCaptionElement);
  });
});

describe('Complete Table Example', () => {
  it('renders a complete table with all components', () => {
    const { container } = render(
      <Table>
        <TableCaption>User Accounts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total: 2 users</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    expect(queryByDataSlot(container, 'table-container')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'table')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'table-caption')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'table-header')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'table-body')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'table-footer')).toBeInTheDocument();
    expect(screen.getByText('User Accounts')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByText('Total: 2 users')).toBeInTheDocument();
  });
});
