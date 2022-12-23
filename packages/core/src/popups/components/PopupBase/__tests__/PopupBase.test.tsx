import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {BackHandler} from 'react-native';

import PopupBase from '../PopupBase';
import Constants from '../constants';

describe('@npm/mobydick-core/PopupBase', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  it('BackHandler', () => {
    const onClose = jest.fn();
    render(<PopupBase onClose={onClose} />);
    // Оно есть вот туть node_modules/react-native/Libraries/Utilities/__mocks__/BackHandler.js
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    BackHandler.mockPressBack();

    expect(onClose).toHaveBeenCalled();
  });

  it('should renders correctly', () => {
    const onClose = jest.fn();

    const {toJSON, getByTestId} = render(<PopupBase onClose={onClose} />);
    const pressable = getByTestId(Constants.testID);

    fireEvent.press(pressable, {target: null, currentTarget: null});

    expect(toJSON()).toMatchSnapshot();
  });

  it('should not fire onClose event', () => {
    const onClose = jest.fn();

    const {toJSON, getByTestId} = render(<PopupBase onClose={onClose} />);
    const pressable = getByTestId(Constants.testID);

    fireEvent.press(pressable, {target: {}, currentTarget: {}});

    expect(toJSON()).toMatchSnapshot();
    expect(onClose).toHaveBeenCalledTimes(0);
  });
});
