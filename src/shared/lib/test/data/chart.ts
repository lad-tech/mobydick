import { ICoordinates, IDataset } from '@lad-tech/mobydick-chart/src/types';

const random = Math.random() * 100;
export const mockChart = () =>
  new Array(20).fill(0).map<ICoordinates>((_value, index) => {
    return {
      x: random * index,
      y: 10 + Math.random() * index,
    };
  });

export const mockChartDataset: IDataset = {
  period: [
    {
      coordinates: mockChart(),
      name: '1 line',
    },
  ],
  'period 1': [
    {
      coordinates: mockChart(),
      name: '1 line',
    },
  ],
};
