import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TabsContent, TabsList, TabsTrigger } from '../index';

describe('useTabsContext', () => {
  it('throws error when TabsList is used outside Tabs context', () => {
    expect(() => {
      render(
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
      );
    }).toThrow('Tabs components must be used within a Tabs component');
  });

  it('throws error when TabsTrigger is used outside Tabs context', () => {
    expect(() => {
      render(<TabsTrigger value="tab-1">Tab 1</TabsTrigger>);
    }).toThrow('Tabs components must be used within a Tabs component');
  });

  it('throws error when TabsContent is used outside Tabs context', () => {
    expect(() => {
      render(<TabsContent value="tab-1">Content 1</TabsContent>);
    }).toThrow('Tabs components must be used within a Tabs component');
  });
});
