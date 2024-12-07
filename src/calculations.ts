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