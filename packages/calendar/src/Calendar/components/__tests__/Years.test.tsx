import {fireEvent, render} from '@testing-library/react-native';

import Years from '../Years';

const yearRange = [
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  2021, 2022, 2023,
];

describe('Years', () => {
  it('render', () => {
    const onCloseYears = jest.fn();
    const onPressYear = jest.fn();
    const {toJSON} = render(
      <Years
        onCloseYears={onCloseYears}
        onPressYear={onPressYear}
        yearRange={yearRange}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('press year', () => {
    const onCloseYears = jest.fn();
    const onPressYear = jest.fn();
    const {toJSON, getAllByLabelText} = render(
      <Years
        onCloseYears={onCloseYears}
        onPressYear={onPressYear}
        yearRange={yearRange}
      />,
    );
    const pressYear = getAllByLabelText('pressYear')[2];
    pressYear && fireEvent.press(pressYear);
    expect(toJSON()).toMatchSnapshot();
  });
});
