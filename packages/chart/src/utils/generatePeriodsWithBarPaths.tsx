import {IChart, IGeneratePeriodsWithPaths} from '../types';

import {generateBarsPath} from './generateBar';

export const generatePeriodsWithBarPaths = ({
  dataset,
  width,
  height,
}: IGeneratePeriodsWithPaths) => {
  'worklet';
  const periods = Object.keys(dataset);

  return periods.map(period => {
    const lines = dataset[period] as IChart[];
    const firstLine = lines[0] as IChart;

    const {coordinates, colors} = firstLine;
    const {
      path: chartPath,
      maxX,
      maxY,
      minX,
      minY,
    } = generateBarsPath({
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
