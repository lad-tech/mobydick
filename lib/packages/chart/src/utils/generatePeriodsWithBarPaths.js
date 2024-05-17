"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePeriodsWithBarPaths = void 0;
const generateBar_1 = require("./generateBar");
const generatePeriodsWithBarPaths = ({ dataset, width, height, }) => {
    'worklet';
    const periods = Object.keys(dataset);
    return periods.map(period => {
        const lines = dataset[period];
        const firstLine = lines[0];
        const { coordinates, colors } = firstLine;
        const { path: chartPath, maxX, maxY, minX, minY, } = (0, generateBar_1.generateBarsPath)({
            width,
            height,
            coordinates,
        });
        const coordinatesLength = coordinates.length;
        return {
            chartPath,
            maxX,
            maxY,
            minX,
            minY,
            coordinatesLength,
            colors,
        };
    });
};
exports.generatePeriodsWithBarPaths = generatePeriodsWithBarPaths;
