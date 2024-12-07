"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateWorkingCapitalRatio = exports.calculateNetProfitMargin = exports.calculateGrossProfitMargin = exports.calculateExpenses = exports.calculateRevenue = void 0;
const calculateRevenue = (data) => {
    return data
        .filter(item => item.account_category === 'revenue')
        .reduce((sum, item) => sum + item.total_value, 0);
};
exports.calculateRevenue = calculateRevenue;
const calculateExpenses = (data) => {
    return data
        .filter(item => item.account_category === 'expense')
        .reduce((sum, item) => sum + item.total_value, 0);
};
exports.calculateExpenses = calculateExpenses;
const calculateGrossProfitMargin = (data, revenue) => {
    const sales = data
        .filter(item => item.account_type === 'sales' && item.value_type === 'debit')
        .reduce((sum, item) => sum + item.total_value, 0);
    return sales / revenue;
};
exports.calculateGrossProfitMargin = calculateGrossProfitMargin;
const calculateNetProfitMargin = (revenue, expenses) => {
    return (revenue - expenses) / revenue;
};
exports.calculateNetProfitMargin = calculateNetProfitMargin;
const calculateWorkingCapitalRatio = (data) => {
    const assets = data
        .filter(item => item.account_category === 'assets' &&
        ['current', 'bank', 'current_accounts_receivable'].includes(item.account_type))
        .reduce((sum, item) => item.value_type === 'debit'
        ? sum + item.total_value
        : sum - item.total_value, 0);
    const liabilities = data
        .filter(item => item.account_category === 'liability' &&
        ['current', 'current_accounts_payable'].includes(item.account_type))
        .reduce((sum, item) => item.value_type === 'credit'
        ? sum + item.total_value
        : sum - item.total_value, 0);
    return assets / liabilities;
};
exports.calculateWorkingCapitalRatio = calculateWorkingCapitalRatio;
