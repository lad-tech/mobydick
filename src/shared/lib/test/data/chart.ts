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
  'period 1': [
    {
      coordinates: mockChart(),
      name: '3 line',
      colors:  [
        '#ff0000',
        '#F43B1D',
      ]
    },
    {
      coordinates: mockChart(),
      name: '4 line',
      colors: [
        '#c7b2b2',
        '#cbbdbd',

      ]
    },
    {
      coordinates: mockChart(),
      name: '5 line',
      colors: [
        '#bcff06',
        '#00e7ff',

      ]
    },
  ],
  period: [
    {
      coordinates: mockChart(),
      name: '1 line',
      colors:  [
        '#ba80ff',
        '#9BE1DA',
        '#56CDCB',
        '#3B8B8E',
      ]
    },
    {
      coordinates: mockChart(),
      name: '2 line',
    },
  ],
};
