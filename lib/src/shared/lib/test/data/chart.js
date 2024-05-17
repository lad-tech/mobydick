"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockChartDataset = exports.mockChart = void 0;
const random = Math.random() * 10;
const mockChart = (n) => new Array(n).fill(0).map((_value, index) => {
    return {
        x: random * index,
        y: 10 + Math.random() * index,
    };
});
exports.mockChart = mockChart;
exports.mockChartDataset = {
    'period 1': [
        {
            coordinates: (0, exports.mockChart)(20),
            name: '1 line',
            colors: [
                '#ff0000',
                '#f4e91d',
            ]
        },
        {
            coordinates: (0, exports.mockChart)(10),
            name: '2 line',
        },
        {
            coordinates: (0, exports.mockChart)(5),
            name: '3 line',
            colors: [
                '#33135b',
                '#9BE1DA',
                '#c5cd56',
                '#3b3f8e',
            ]
        },
    ],
    'pasdasdasderiod 1': [
        {
            coordinates: (0, exports.mockChart)(20),
            name: '1 line',
            colors: [
                '#0022ff',
                '#cd1df4',
            ]
        },
        {
            coordinates: (0, exports.mockChart)(10),
            name: '2 line',
        },
        {
            coordinates: (0, exports.mockChart)(5),
            name: '3 line',
            colors: [
                '#5b3113',
                '#9BE1DA',
                '#c5cd56',
                '#668e3b',
            ]
        },
    ],
    'asdasdasdasdasd 1': [
        {
            coordinates: (0, exports.mockChart)(20),
            name: '1 line',
            colors: [
                '#1c9680',
                '#479459',
            ]
        },
        {
            coordinates: (0, exports.mockChart)(10),
            name: '2 line',
        },
        {
            coordinates: (0, exports.mockChart)(5),
            name: '3 line',
            colors: [
                '#33135b',
                '#9BE1DA',
                '#c5cd56',
                '#3b3f8e',
            ]
        },
    ],
    period: [
        {
            coordinates: (0, exports.mockChart)(20),
            name: '1 line',
            colors: [
                '#ba80ff',
                '#9BE1DA',
                '#56CDCB',
                '#3B8B8E',
            ]
        },
        {
            coordinates: (0, exports.mockChart)(10),
            name: '2 line',
            colors: [
                '#E0F5E9',
                '#e1db9b',
                '#abcd56',
                '#768e3b',
                '#1cef38',
                '#1df488',
                '#1de7f9',
                '#5787ff',
            ],
        },
        {
            coordinates: (0, exports.mockChart)(5),
            name: '3 line',
            colors: [
                '#ee80ff',
                '#e19b9b',
                '#5ecd56',
                '#833b8e',
            ]
        },
    ],
};
