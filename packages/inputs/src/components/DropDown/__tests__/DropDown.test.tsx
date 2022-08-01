import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {SimpleIcon} from '@npm/mobydick-styles';
import {PopupsProvider} from '@npm/mobydick-popups';

import DropDown from '../DropDown';

describe('@npm/mobydick-inputs/DropDown', () => {
  it('renders correctly 5 elements', () => {
    const {toJSON} = render(
      <PopupsProvider>
        <DropDown
          selectedItem={'SelectedItem'}
          placeholder={'Выберите язык'}
          title={'Название поля'}
          list={['Русский', 'English', 'Deutsch', 'Japanese', 'Bolgarian']}
          onPress={jest.fn()}
          rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
        />
        ,
      </PopupsProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly 2 elements', () => {
    const {toJSON} = render(
      <PopupsProvider>
        <DropDown
          placeholder={'Выберите язык'}
          title={'Название поля'}
          list={['Русский', 'English']}
          onPress={jest.fn()}
          rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
        />
      </PopupsProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly 30 elements', () => {
    const {toJSON} = render(
      <PopupsProvider>
        <DropDown
          placeholder={'Выберите язык'}
          title={'Название поля'}
          list={[
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
          ]}
          onPress={jest.fn()}
          rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
        />
      </PopupsProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('buttonPress', () => {
    const {toJSON, getByTestId} = render(
      <PopupsProvider>
        <DropDown
          placeholder={'Выберите язык'}
          title={'Название поля'}
          list={['Русский', 'English']}
          onPress={jest.fn()}
          rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
        />
      </PopupsProvider>,
    );
    const pressable = getByTestId('drop_down_button');

    fireEvent.press(pressable, {target: null, currentTarget: null});
    expect(toJSON()).toMatchSnapshot();
  });
});
