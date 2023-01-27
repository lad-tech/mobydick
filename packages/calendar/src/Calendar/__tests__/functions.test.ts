import {calculateBoundaries} from '../functions';

describe('Calendar-functions', () => {
  it('calculateBoundaries', () => {
    expect(
      calculateBoundaries(
        {
          dateString: '2023-01-19',
          day: 19,
          month: 1,
          timestamp: 1674086400000,
          year: 2023,
        },
        {
          dates: {
            '2023-01-20': {
              color: '#2B78EE',
              customContainerStyle: [{}],
              endingDay: true,
              startingDay: true,
              textColor: '#FFF',
            },
          },
          fromDate: new Date('2023-01-20T00:00:00.000Z'),
          toDate: new Date('2023-01-20T00:00:00.000Z'),
        },
        true,
      ),
    ).toEqual({
      fromDate: 1674086400000,
      toDate: new Date('2023-01-20T00:00:00.000Z'),
    });
  });
  it('day > max', () => {
    expect(
      calculateBoundaries(
        {
          dateString: '2023-01-20',
          day: 20,
          month: 1,
          timestamp: 1674172800000,
          year: 2023,
        },
        {
          dates: {
            '2023-01-18': {
              color: '#2B78EE',
              customContainerStyle: [{}],
              endingDay: true,
              startingDay: true,
              textColor: '#FFF',
            },
            '2023-01-19': {
              color: '#2B78EE',
              customContainerStyle: [{}],
              endingDay: true,
              startingDay: true,
              textColor: '#FFF',
            },
          },
          fromDate: new Date('2023-01-18T00:00:00.000Z'),
          toDate: new Date('2023-01-19T00:00:00.000Z'),
        },
        true,
      ),
    ).toEqual({
      fromDate: new Date('2023-01-18T00:00:00.000Z'),
      toDate: 1674172800000,
    });
  });
});
