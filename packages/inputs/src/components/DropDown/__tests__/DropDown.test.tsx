import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {SimpleIcon} from '@npm/mobydick-styles';
import {PopupsProvider} from '@npm/mobydick-popups';
import {View} from 'react-native';
import Constants from '@npm/mobydick-popups/src/components/PopupBase/constants';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import DropDown from '../DropDown';
import {ACCESSIBILITY_LABEL} from '../constants';
import {IInputsTypes} from '../../types';

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
      <SafeAreaProvider>
        <PopupsProvider>
          <DropDown
            selectedItem={list[1]}
            placeholder={'Выберите язык'}
            title={'Название поля'}
            list={list}
            onPress={jest.fn()}
            rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
          />
        </PopupsProvider>
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('selectItem', async () => {
    const onPress = jest.fn();
    const array: [
      {label: string; value: string},
      {label: string; value: string},
    ] = [
      {label: 'Русский', value: 'Русский'},
      {label: 'English', value: 'English'},
    ];
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

    const {getByLabelText} = render(
      <SafeAreaProvider>
        <PopupsProvider>
          <DropDown
            placeholder={'Выберите язык'}
            title={'Название поля'}
            list={array}
            onPress={onPress}
            type={IInputsTypes.disabled}
            selectedItem={array[1].label}
            rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
          />
        </PopupsProvider>
      </SafeAreaProvider>,
    );
    const pressable = getByLabelText(ACCESSIBILITY_LABEL.selector);
    fireEvent.press(pressable);

    const pressableSelect = getByLabelText(array[1].label);
    fireEvent.press(pressableSelect);

    expect(onPress).toHaveBeenCalledWith(array[1].value);
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
      <SafeAreaProvider>
        <PopupsProvider>
          <DropDown
            selectedItem={'selectedItem'}
            placeholder={'Выберите язык'}
            title={'Название поля'}
            list={array}
            onPress={onPress}
            subtitle={'subtitle'}
            subtitleIcon={'icon-account'}
            buttonStyle={{
              width: 400,
              height: 70,
              borderColor: '#000',
              backgroundColor: '#000',
            }}
            rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
          />
        </PopupsProvider>
      </SafeAreaProvider>,
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

  it('renders correctly 10 elements type wrong', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <PopupsProvider>
          <DropDown
            selectedItem={'selectedItem'}
            placeholder={'Выберите язык'}
            title={'Название поля'}
            list={list}
            onPress={jest.fn()}
            type={IInputsTypes.wrong}
            titleFont={'Medium-Tertiary-XS'}
            titleStyle={{paddingBottom: 8}}
            buttonStyle={{
              width: 400,
              height: 70,
              borderColor: '#000',
              backgroundColor: '#000',
            }}
            rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
          />
        </PopupsProvider>
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly 10 elements type valid', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <PopupsProvider>
          <DropDown
            selectedItem={'selectedItem'}
            placeholder={'Выберите язык'}
            title={'Название поля'}
            list={list}
            onPress={jest.fn()}
            type={IInputsTypes.valid}
            rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
          />
        </PopupsProvider>
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly 10 elements disabled', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <PopupsProvider>
          <DropDown
            selectedItem={undefined}
            placeholder={'Выберите язык'}
            title={'Название поля'}
            list={list}
            onPress={jest.fn()}
            disabled={true}
            rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
          />
        </PopupsProvider>
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly without array', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <PopupsProvider>
          <DropDown
            selectedItem={list[1]}
            placeholder={'Выберите язык'}
            title={'Название поля'}
            required={false}
            list={[]}
            onPress={jest.fn()}
            rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
          />
        </PopupsProvider>
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly without array with text and font', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <PopupsProvider>
          <DropDown
            selectedItem={list[1]}
            placeholder={'Выберите язык'}
            title={'Название поля'}
            required={true}
            listEmptyFont={'Regular-Error-L'}
            listEmptyText={'Ничего нет'}
            list={[]}
            onPress={jest.fn()}
            rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
          />
        </PopupsProvider>
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
