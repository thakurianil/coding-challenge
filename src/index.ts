import { readData, formatCurrency, formatPercentage } from './utils';
import {
    calculateRevenue,
    calculateExpenses

} from './calculations';

const data = readData('./data.json');

const revenue = calculateRevenue(data);
const expenses = calculateExpenses(data);

console.log(`Revenue: ${formatCurrency(revenue)}`);
console.log(`Expenses: ${formatCurrency(expenses)}`);