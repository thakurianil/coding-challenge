export const calculateRevenue = (data: any[]): number => {
    return data
        .filter(item => item.account_category === 'revenue')
        .reduce((sum, item) => sum + item.total_value, 0);
};

export const calculateExpenses = (data: any[]): number => {
    return data
        .filter(item => item.account_category === 'expense')
        .reduce((sum, item) => sum + item.total_value, 0);
};

export const calculateGrossProfitMargin = (data: any[], revenue: number): number => {
    const sales = data
        .filter(
            item =>
                item.account_type === 'sales' && item.value_type === 'debit'
        )
        .reduce((sum, item) => sum + item.total_value, 0);
    return sales / revenue;
};

export const calculateNetProfitMargin = (revenue: number, expenses: number): number => {
    return (revenue - expenses) / revenue;
};


export const calculateWorkingCapitalRatio = (data: any[]): number => {
    const assets = data
        .filter(
            item =>
                item.account_category === 'assets' &&
                ['current', 'bank', 'current_accounts_receivable'].includes(item.account_type)
        )
        .reduce((sum, item) =>
            item.value_type === 'debit'
                ? sum + item.total_value
                : sum - item.total_value, 0);

    const liabilities = data
        .filter(
            item =>
                item.account_category === 'liability' &&
                ['current', 'current_accounts_payable'].includes(item.account_type)
        )
        .reduce((sum, item) =>
            item.value_type === 'credit'
                ? sum + item.total_value
                : sum - item.total_value, 0);

    return assets / liabilities;
};