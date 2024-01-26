import {IChart, IGeneratePeriodsWithPaths} from '../types';

import {generateLinePath} from './generateLinePath';

export const generatePeriodsWithLinePaths = ({
  dataset,
  width,
  height,
}: IGeneratePeriodsWithPaths) => {
  'worklet';
  const periods = Object.keys(dataset);

  return periods.map(period => {
    const lines = dataset[period] as IChart[];
    const firstLine = lines[0] as IChart;

    const {coordinates} = firstLine;
    const {
      path: chartPath,
      maxX,
      maxY,
      minX,
      minY,
    } = generateLinePath({
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
    };
  });
};
