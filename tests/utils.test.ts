import { formatCurrency, formatPercentage } from '../src/utils';

test('formatCurrency should format numbers correctly', () => {
    expect(formatCurrency(1234567)).toBe('$1,234,567');
});

test('formatPercentage should format percentages correctly', () => {
    expect(formatPercentage(0.12345)).toBe('12.3%');
});
