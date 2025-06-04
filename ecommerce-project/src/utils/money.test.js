// src/utils/money.test.js
import { describe, it, expect } from 'vitest';
import { formatMoney } from './money';

describe('formatMoney()', () => {
  it('formats 1999 cents as $19.99', () => {
    expect(formatMoney(1999)).toBe('$19.99');
  });

  it('formats 0 cents as $0.00', () => {
    expect(formatMoney(0)).toBe('$0.00');
  });

  it('displays 2 decimals', () => {
    expect(formatMoney(1090)).toBe('$10.90');
  });
});
