import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {SimpleIcon} from '@npm/mobydick-styles';
import {PopupsProvider} from '@npm/mobydick-popups';
import {View} from 'react-native';
import Constants from '@npm/mobydick-popups/src/components/PopupBase/constants';

import DropDown from '../DropDown';
import {ACCESSIBILITY_LABEL} from '../constants';

describe('@npm/mobydick-inputs/DropDown', () => {
  let viewRef: React.RefObject<View>;
  beforeEach(() => {
    viewRef = React.createRef();
    render(<View ref={viewRef} />);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  it('renders correctly 10 elements', () => {
    const {toJSON} = render(
      <PopupsProvider>
        <DropDown
          placeholder={'Выберите язык'}
          label={'Название поля'}
          list={list}
          onPress={jest.fn()}
          rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
        />
      </PopupsProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('selectItem', async () => {
    const onPress = jest.fn();
    const array = ['Русский', 'English'] as const;
    jest
      .spyOn(viewRef.current as View, 'measure')
      .mockImplementation(
        (
          cb: (
            x: number,
            y: number,
            width: number,
            height: number,
            pageX: number,
            pageY: number,
          ) => void,
        ) => cb(0, 0, 1, 1, 287, 2410),
      );

    const {getByLabelText, toJSON} = render(
      <PopupsProvider>
        <DropDown
          placeholder={'Выберите язык'}
          label={'Название поля'}
          list={[...array]}
          onPress={onPress}
          rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
        />
      </PopupsProvider>,
    );
    const pressable = getByLabelText(ACCESSIBILITY_LABEL.selector);
    fireEvent.press(pressable);

    const pressableSelect = getByLabelText(array[1]);
    fireEvent.press(pressableSelect);

    expect(toJSON()).toMatchSnapshot();
  });

  it('selectItemClose', async () => {
    const onPress = jest.fn();
    const array = ['Русский', 'English'];
    const useRefSpy = jest
      .spyOn(viewRef.current as View, 'measure')
      .mockImplementation(
        (
          cb: (
            x: number,
            y: number,
            width: number,
            height: number,
            pageX: number,
            pageY: number,
          ) => void,
        ) => cb(0, 0, 1, 1, 287, 2410),
      );

    const {getByLabelText, toJSON, getByTestId} = render(
      <PopupsProvider>
        <DropDown
          placeholder={'Выберите язык'}
          label={'Название поля'}
          list={array}
          onPress={onPress}
          rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
        />
      </PopupsProvider>,
    );
    const pressable = getByLabelText(ACCESSIBILITY_LABEL.selector);

    fireEvent.press(pressable);

    const pressableClose = getByTestId(Constants.testID);
    const copyTarget = 'copyTarget';
    fireEvent.press(pressableClose, {
      target: copyTarget,
      currentTarget: copyTarget,
    });
    expect(toJSON()).toMatchSnapshot();
    expect(useRefSpy).toHaveBeenCalledTimes(1);
  });
});
