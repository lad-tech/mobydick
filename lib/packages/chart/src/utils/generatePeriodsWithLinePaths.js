"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePeriodsWithLinePaths = void 0;
const generateLinePath_1 = require("./generateLinePath");
const getLinesMinMax_1 = require("./getLinesMinMax");
const constants_1 = require("./constants");
const generatePeriodsWithLinePaths = ({ dataset, width, height, }) => {
    'worklet';
    const periods = Object.keys(dataset);
    return periods.map(period => {
        const lines = dataset[period];
        const { maxY, maxX, minY, minX } = (0, getLinesMinMax_1.getLinesMinMax)(lines);
        let maxCoordinatesLength = 0;
        const temp = lines.map(line => {
            const { coordinates, colors, name } = line;
            const { path: chartPath } = (0, generateLinePath_1.generateLinePath)({
                width,
                height,
                coordinates,
                maxY,
                maxX,
                minY,
                minX,
            });
            maxCoordinatesLength = Math.max(maxCoordinatesLength, coordinates.length);
            return {
                path: chartPath,
                colors: colors ?? constants_1.COLORS,
                name,
            };
        });
        return {
            maxX,
            maxY,
            minY,
            minX,
            maxCoordinatesLength,
            lines: temp,
        };
    });
};
exports.generatePeriodsWithLinePaths = generatePeriodsWithLinePaths;
