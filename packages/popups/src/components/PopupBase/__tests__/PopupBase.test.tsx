import React, {useContext} from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Constants from '@npm/mobydick-popups/src/components/PopupBase/constants';
import {renderHook} from '@testing-library/react-hooks';
import {PopupsContext, usePopups} from '@npm/mobydick-popups';

import PopupBase from '../PopupBase';

jest.mock('../../../hooks/usePopups');

describe('@npm/mobydick-popups/PopupBase', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  it('should renders correctly', () => {
    const popupContextMock = {
      closePopup: jest.fn(),
    };
    (usePopups as jest.Mock).mockReturnValue(popupContextMock);
    const id = '41710252-4116-46ba-b2e9-9ec0d34f9db8';
    const {toJSON, getByTestId} = render(
      <PopupBase id={id} Content={() => null} onClose={() => null} />,
    );
    const pressable = getByTestId(Constants.testID);

    fireEvent.press(pressable, {target: null, currentTarget: null});

    expect(toJSON()).toMatchSnapshot();
    expect(popupContextMock.closePopup).toHaveBeenCalledTimes(1);
    expect(popupContextMock.closePopup).toHaveBeenCalledWith(id);
  });
  it('should not fire onClose event', () => {
    const {result} = renderHook(() => useContext(PopupsContext));

    expect(result.current).toStrictEqual(
      expect.objectContaining({
        popups: [],
      }),
    );

    const closePopup = jest.spyOn(result.current, 'closePopup');

    const id = '41710252-4116-46ba-b2e9-9ec0d34f9db8';
    const {toJSON, getByTestId} = render(
      <PopupBase id={id} Content={() => null} onClose={() => null} />,
    );
    const pressable = getByTestId(Constants.testID);

    fireEvent.press(pressable, {target: {}, currentTarget: {}});

    expect(toJSON()).toMatchSnapshot();
    expect(closePopup).toHaveBeenCalledTimes(0);
  });
});
