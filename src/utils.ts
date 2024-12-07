import fs from 'fs';
import path from 'path';

export const readData = (filePath: string): any[] => {
    const data = fs.readFileSync(path.resolve(filePath), 'utf-8');
    return JSON.parse(data).data;
};

export const formatCurrency = (value: number): string => {
    return `$${Math.round(value).toLocaleString()}`;
};

export const formatPercentage = (value: number): string => {
    return `${(value * 100).toFixed(1)}%`;
};