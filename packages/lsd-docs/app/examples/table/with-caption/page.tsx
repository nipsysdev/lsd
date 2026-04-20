'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

export const CODE = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@nipsys/lsd';

export function Example() {
  return (
    <Table>
      <TableCaption>Sales Data - Q4 2024</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Month</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Growth</TableHead>
          <TableHead>Target</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>October</TableCell>
          <TableCell>$45,000</TableCell>
          <TableCell>+12%</TableCell>
          <TableCell>$50,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>November</TableCell>
          <TableCell>$52,000</TableCell>
          <TableCell>+15%</TableCell>
          <TableCell>$50,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>December</TableCell>
          <TableCell>$58,000</TableCell>
          <TableCell>+11%</TableCell>
          <TableCell>$55,000</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};`;

export function TableWithCaptionExample() {
  useSendThemeToIframes();

  return (
    <Table>
      <TableCaption>Sales Data - Q4 2024</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Month</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Growth</TableHead>
          <TableHead>Target</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>October</TableCell>
          <TableCell>$45,000</TableCell>
          <TableCell>+12%</TableCell>
          <TableCell>$50,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>November</TableCell>
          <TableCell>$52,000</TableCell>
          <TableCell>+15%</TableCell>
          <TableCell>$50,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>December</TableCell>
          <TableCell>$58,000</TableCell>
          <TableCell>+11%</TableCell>
          <TableCell>$55,000</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default function Basic() {
  return <TableWithCaptionExample />;
}
