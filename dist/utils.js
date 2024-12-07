"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPercentage = exports.formatCurrency = exports.readData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const readData = (filePath) => {
    const data = fs_1.default.readFileSync(path_1.default.resolve(filePath), 'utf-8');
    return JSON.parse(data).data;
};
exports.readData = readData;
const formatCurrency = (value) => {
    return `$${Math.round(value).toLocaleString()}`;
};
exports.formatCurrency = formatCurrency;
const formatPercentage = (value) => {
    return `${(value * 100).toFixed(1)}%`;
};
exports.formatPercentage = formatPercentage;
