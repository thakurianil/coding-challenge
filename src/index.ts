import { readData, formatCurrency, formatPercentage } from './utils';
import {
    calculateRevenue,
    calculateExpenses,
    calculateGrossProfitMargin,
    calculateNetProfitMargin

} from './calculations';

const data = readData('./data.json');
console.log(data);


const revenue = calculateRevenue(data);
const expenses = calculateExpenses(data);
const grossProfitMargin = calculateGrossProfitMargin(data, revenue);
const netProfitMargin = calculateNetProfitMargin(revenue, expenses);


console.log(`Revenue: ${formatCurrency(revenue)}`);
console.log(`Expenses: ${formatCurrency(expenses)}`);
console.log(`Gross Profit Margin: ${formatPercentage(grossProfitMargin)}`);
console.log(`Net Profit Margin: ${formatPercentage(netProfitMargin)}`);
