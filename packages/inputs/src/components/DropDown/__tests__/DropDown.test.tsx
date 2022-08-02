import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {SimpleIcon} from '@npm/mobydick-styles';
import {PopupsProvider} from '@npm/mobydick-popups';

import DropDown from '../DropDown';
import {ACCESSIBILITY_LABEL} from '../constants';

describe('@npm/mobydick-inputs/DropDown', () => {
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

    const {getByLabelText, toJSON} = render(
      <PopupsProvider>
        <DropDown
          placeholder={'Выберите язык'}
          label={'Название поля'}
          list={['Русский', 'English']}
          onPress={onPress}
          rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
        />
      </PopupsProvider>,
    );
    const pressable = getByLabelText(ACCESSIBILITY_LABEL.selector);

    fireEvent.press(pressable);
    expect(toJSON()).toMatchSnapshot();
  });
});
