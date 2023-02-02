import {
  calculateBoundaries,
  calculateYearRange,
  getAllDatesBetween,
} from '../functions';
import {IDirection} from '../types';

describe('Calendar-functions', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
  });
  afterAll(() => {
    jest.useRealTimers();
  });
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
      fromDate: new Date('2023-01-19T00:00:00.000Z').getTime(),
      toDate: new Date('2023-01-20T00:00:00.000Z'),
    });
  });
  it('calculateBoundaries same day', () => {
    expect(
      calculateBoundaries(
        {
          dateString: '2023-01-20',
          day: 20,
          month: 1,
          timestamp: new Date('2023-01-20T00:00:00.000Z').getTime(),
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
      fromDate: new Date('2023-01-20T00:00:00.000Z').getTime(),
      toDate: new Date('2023-01-20T00:00:00.000Z').getTime(),
    });
  });
  it('calculateBoundaries day > max', () => {
    expect(
      calculateBoundaries(
        {
          dateString: '2023-01-25',
          day: 25,
          month: 1,
          timestamp: new Date('2023-01-25T00:00:00.000Z').getTime(),
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
            '2023-01-20': {
              color: '#2B78EE',
              customContainerStyle: [{}],
              endingDay: true,
              startingDay: true,
              textColor: '#FFF',
            },
          },
          fromDate: new Date('2023-01-18T00:00:00.000Z'),
          toDate: new Date('2023-01-20T00:00:00.000Z'),
        },
        true,
      ),
    ).toEqual({
      fromDate: new Date('2023-01-18T00:00:00.000Z'),
      toDate: new Date('2023-01-25T00:00:00.000Z').getTime(),
    });
  });
  it('calculateBoundaries day between', () => {
    expect(
      calculateBoundaries(
        {
          dateString: '2023-01-20',
          day: 20,
          month: 1,
          timestamp: new Date('2023-01-20T00:00:00.000Z').getTime(),
          year: 2023,
        },
        {
          dates: {
            '2023-01-17': {
              color: '#2B78EE',
              customContainerStyle: [{}],
              endingDay: true,
              startingDay: true,
              textColor: '#FFF',
            },
            '2023-01-25': {
              color: '#2B78EE',
              customContainerStyle: [{}],
              endingDay: true,
              startingDay: true,
              textColor: '#FFF',
            },
          },
          fromDate: new Date('2023-01-17T00:00:00.000Z'),
          toDate: new Date('2023-01-25T00:00:00.000Z'),
        },
        true,
      ),
    ).toEqual({
      fromDate: new Date('2023-01-17T00:00:00.000Z'),
      toDate: new Date('2023-01-20T00:00:00.000Z').getTime(),
    });
  });

  it('calculateYearRange', () => {
    expect(calculateYearRange(2023)).toEqual([
      2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
      2020, 2021, 2022, 2023,
    ]);
  });

  it('calculateYearRange right', () => {
    expect(calculateYearRange(2007, IDirection.right)).toEqual([
      2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
      2020, 2021, 2022, 2023,
    ]);
  });
  it('calculateYearRange left', () => {
    expect(calculateYearRange(2024, IDirection.left)).toEqual([
      2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
      2020, 2021, 2022, 2023,
    ]);
  });

  it('getAllDatesBetween', () => {
    expect(
      getAllDatesBetween(
        new Date('2022-12-15T00:00:00.000Z'),
        new Date('2022-12-15T00:00:00.000Z'),
        {
          colorPrime: {
            color: '#fff',
            textColor: '#000',
          },
          colorSoft: {
            color: '#fff',
            textColor: '#000',
          },
          colorToday: {
            color: '#fff',
            textColor: '#000',
          },
        },
        false,
      ),
    ).toEqual({
      dates: {
        '2022-12-15': {
          color: '#fff',
          customContainerStyle: {borderRadius: 6, width: '100%'},
          endingDay: true,
          startingDay: true,
          textColor: '#000',
        },
      },
      fromDate: new Date('2022-12-15T00:00:00.000Z'),
      toDate: new Date('2022-12-15T00:00:00.000Z'),
      lengthDateRange: 1,
    });
  });

  it('getAllDatesBetween length=5 isShowToday', () => {
    jest.setSystemTime(new Date('2022-01-22'));
    expect(
      getAllDatesBetween(
        new Date('2022-01-20T00:00:00.000Z'),
        new Date('2022-01-24T00:00:00.000Z'),
        {
          colorPrime: {
            color: '#fff',
            textColor: '#000',
          },
          colorSoft: {
            color: '#fff',
            textColor: '#000',
          },
          colorToday: {
            color: '#fff',
            textColor: '#000',
          },
        },
        true,
      ),
    ).toEqual({
      dates: {
        '2022-01-20': {
          color: '#fff',
          customContainerStyle: {borderRadius: 6, width: '100%'},
          endingDay: true,
          startingDay: true,
          textColor: '#000',
        },
        '2022-01-21': {
          color: '#fff',
          textColor: '#000',
        },
        '2022-01-22': {
          color: '#fff',
          customTextStyle: {fontWeight: '600'},
          textColor: '#000',
        },
        '2022-01-23': {
          color: '#fff',
          textColor: '#000',
        },
        '2022-01-24': {
          color: '#fff',
          customContainerStyle: {borderRadius: 6, width: '100%'},
          endingDay: true,
          startingDay: true,
          textColor: '#000',
        },
      },
      fromDate: new Date('2022-01-20T00:00:00.000Z'),
      toDate: new Date('2022-01-24T00:00:00.000Z'),
      lengthDateRange: 5,
    });
  });
});
