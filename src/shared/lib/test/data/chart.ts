import { ICoordinates, IDataset } from '@lad-tech/mobydick-chart/src/types';

const random = Math.random() * 10;
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
      name: '1 line',
      colors:  [
        '#ff0000',
        '#f4e91d',
      ]
    },
    {
      coordinates: mockChart(10),
      name: '2 line',
    },
    {
      coordinates: mockChart(5),
      name: '3 line',
      colors:  [
        '#33135b',
        '#9BE1DA',
        '#c5cd56',
        '#3b3f8e',
      ]
    },
  ],
  'pasdasdasderiod 1': [
    {
      coordinates: mockChart(20),
      name: '1 line',
      colors:  [
        '#ff0000',
        '#f4e91d',
      ]
    },
    {
      coordinates: mockChart(10),
      name: '2 line',
    },
    {
      coordinates: mockChart(5),
      name: '3 line',
      colors:  [
        '#33135b',
        '#9BE1DA',
        '#c5cd56',
        '#3b3f8e',
      ]
    },
  ],

  'asdasdasdasdasd 1': [
    {
      coordinates: mockChart(20),
      name: '1 line',
      colors:  [
        '#ff0000',
        '#f4e91d',
      ]
    },
    {
      coordinates: mockChart(10),
      name: '2 line',
    },
    {
      coordinates: mockChart(5),
      name: '3 line',
      colors:  [
        '#33135b',
        '#9BE1DA',
        '#c5cd56',
        '#3b3f8e',
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
      colors:  [
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
      coordinates: mockChart(5),
      name: '3 line',
      colors:  [
        '#ee80ff',
        '#e19b9b',
        '#5ecd56',
        '#833b8e',
      ]
    },
  ],
};
