import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Constants from '@npm/mobydick-popups/src/components/PopupBase/constants';

import PopupBase from '../PopupBase';
import usePopups from '../../../hooks/usePopups';

jest.mock('../../../hooks/usePopups');
describe('@npm/mobydick-popups/PopupBase', () => {
  it('should renders correctly', () => {
    const popupContextMock = {
      closePopup: jest.fn(),
    };
    (usePopups as jest.Mock).mockReturnValue(popupContextMock);
    const id = '41710252-4116-46ba-b2e9-9ec0d34f9db8';
    const {toJSON, getByTestId} = render(
      <PopupBase id={id} isVisible Content={() => null} onClose={() => null} />,
    );
    const pressable = getByTestId(Constants.testID);

    fireEvent.press(pressable, {target: null, currentTarget: null});

    expect(toJSON()).toMatchSnapshot();
    expect(popupContextMock.closePopup).toHaveBeenCalledTimes(1);
    expect(popupContextMock.closePopup).toHaveBeenCalledWith(id);
  });
  it('should not render if `isVisible` = false', () => {
    const {toJSON} = render(
      <PopupBase
        id={'41710252-4116-46ba-b2e9-9ec0d34f9db8'}
        isVisible={false}
        Content={() => null}
        onClose={() => null}
      />,
    );

    expect(toJSON()).toBe(null);
  });
  it('should not fire onClose event', () => {
    const popupContextMock = {
      closePopup: jest.fn(),
    };
    (usePopups as jest.Mock).mockReturnValue(popupContextMock);
    const id = '41710252-4116-46ba-b2e9-9ec0d34f9db8';
    const {toJSON, getByTestId} = render(
      <PopupBase id={id} isVisible Content={() => null} onClose={() => null} />,
    );
    const pressable = getByTestId(Constants.testID);

    fireEvent.press(pressable, {target: {}, currentTarget: {}});

    expect(toJSON()).toMatchSnapshot();
    expect(popupContextMock.closePopup).toHaveBeenCalledTimes(0);
  });
});
