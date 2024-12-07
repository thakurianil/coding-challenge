import { readData, formatCurrency, formatPercentage } from './utils';
import {
    calculateRevenue,

} from './calculations';

const data = readData('./data.json');

const revenue = calculateRevenue(data);

console.log(`Revenue: ${formatCurrency(revenue)}`);
