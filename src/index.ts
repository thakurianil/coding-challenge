import { readData, formatCurrency, formatPercentage } from './utils';
import {
    calculateRevenue,
    calculateExpenses,
    calculateGrossProfitMargin

} from './calculations';

const data = readData('./data.json');
console.log(data);


const revenue = calculateRevenue(data);
const expenses = calculateExpenses(data);
const grossProfitMargin = calculateGrossProfitMargin(data, revenue);

console.log(`Revenue: ${formatCurrency(revenue)}`);
console.log(`Expenses: ${formatCurrency(expenses)}`);
console.log(`Gross Profit Margin: ${formatPercentage(grossProfitMargin)}`);
