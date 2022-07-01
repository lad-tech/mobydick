import React, {useContext} from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

import {usePopups} from '../../../hooks';
import PopupBase from '../PopupBase';
import Constants from '../constants';
import {PopupsContext} from '../../../context';

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

    const {toJSON, getByTestId} = render(<PopupBase onClose={() => null} />);
    const pressable = getByTestId(Constants.testID);

    fireEvent.press(pressable, {target: null, currentTarget: null});

    expect(toJSON()).toMatchSnapshot();
  });
  it('should not fire onClose event', () => {
    const {result} = renderHook(() => useContext(PopupsContext));

    expect(result.current).toStrictEqual(
      expect.objectContaining({
        popups: [],
      }),
    );

    const closePopup = jest.spyOn(result.current, 'closePopup');

    const {toJSON, getByTestId} = render(
      <PopupBase onClose={() => closePopup} />,
    );
    const pressable = getByTestId(Constants.testID);

    fireEvent.press(pressable, {target: {}, currentTarget: {}});

    expect(toJSON()).toMatchSnapshot();
    expect(closePopup).toHaveBeenCalledTimes(0);
  });
});
