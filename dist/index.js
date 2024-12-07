"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const calculations_1 = require("./calculations");
const data = (0, utils_1.readData)('./data.json');
console.log(data);
const revenue = (0, calculations_1.calculateRevenue)(data);
const expenses = (0, calculations_1.calculateExpenses)(data);
const grossProfitMargin = (0, calculations_1.calculateGrossProfitMargin)(data, revenue);
const netProfitMargin = (0, calculations_1.calculateNetProfitMargin)(revenue, expenses);
const workingCapitalRatio = (0, calculations_1.calculateWorkingCapitalRatio)(data);
console.log(`Revenue: ${(0, utils_1.formatCurrency)(revenue)}`);
console.log(`Expenses: ${(0, utils_1.formatCurrency)(expenses)}`);
console.log(`Gross Profit Margin: ${(0, utils_1.formatPercentage)(grossProfitMargin)}`);
console.log(`Net Profit Margin: ${(0, utils_1.formatPercentage)(netProfitMargin)}`);
console.log(`Working Capital Ratio: ${(0, utils_1.formatPercentage)(workingCapitalRatio)}`);