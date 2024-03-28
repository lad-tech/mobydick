import { ICoordinates, IDataset } from '@lad-tech/mobydick-chart/src/types';

const random = Math.random() * 100;
export const mockChart = (n: number) =>
  new Array(n).fill(0).map<ICoordinates>((_value, index) => {
    return {
      x: random * index,
      y: 10 + Math.random() * index,
    };
  });

export const mockChartDataset: IDataset = {
  'period 1': [
    {
      coordinates: mockChart(20),
      name: '3 line',
      colors:  [
        '#ff0000',
        '#f4e91d',
      ]
    },
    {
      coordinates: mockChart(10),
      name: '4 line',
      colors: [
        '#c7b2b2',
        '#cbbdbd',

      ]
    },
    {
      coordinates: mockChart(5),
      name: '5 line',
      colors: [
        '#bcff06',
        '#00e7ff',

      ]
    },
  ],
  period: [
    {
      coordinates: mockChart(20),
      name: '1 line',
      colors:  [
        '#ba80ff',
        '#9BE1DA',
        '#56CDCB',
        '#3B8B8E',
      ]
    },
    {
      coordinates: mockChart(10),
      name: '2 line',
    },
    {
      coordinates: mockChart(3),
      name: '2 line',
      colors:  [
        '#d5ff80',
        '#9BE1DA',
        '#5658cd',
        '#3B8B8E',
      ]
    },
    {
      coordinates: mockChart(2),
      name: '2 line',
      colors:  [
        '#d5ff80',
        '#9BE1DA',
        '#5658cd',
        '#3B8B8E',
      ]
    },
  ],
};
