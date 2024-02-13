import {fireEvent, render} from '@testing-library/react-native';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';

import DropDown from '../DropDown';
import {IInputsTypes} from '../../types';
import PopupsProvider from '../../../../popups/context/PopupsProvider';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';
import Constants from '../../../../popups/components/PopupBase/constants';
import {LABELS} from '../../../../other';
import {Pressable} from '../../../../basic';

describe('@lad-tech/mobydick-core/DropDown', () => {
  let viewRef: React.RefObject<View>;
  beforeEach(() => {
    viewRef = React.createRef();
    render(<Pressable ref={viewRef} />);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  const list = [
    {label: 'Русский', value: 'Русский'},
    {label: 'English', value: 'English'},
  ];

  it('renders correctly 10 elements', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <PopupsProvider>
          <DropDown
            selectedItem={list[1]?.value}
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
            list={list}
            onPress={onPress}
            type={IInputsTypes.disabled}
            selectedItem={list[1]?.label}
            rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
          />
        </PopupsProvider>
      </SafeAreaProvider>,
    );
    const pressable = getByLabelText(LABELS.selector);
    fireEvent.press(pressable);

    const pressableSelect = getByLabelText(list[1]!.label);
    fireEvent.press(pressableSelect);

    expect(onPress).toHaveBeenCalledWith(list[1]?.value);
  });

  it('selectItemClose', async () => {
    const onPress = jest.fn();
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
            selectedItem={list[1]?.value}
            placeholder={'Выберите язык'}
            title={'Название поля'}
            list={list}
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
    const pressable = getByLabelText(LABELS.selector);

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
            selectedItem={list[1]?.value}
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
            selectedItem={list[1]?.value}
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
            selectedItem={undefined}
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
            selectedItem={undefined}
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

  it('multiselect snapshot', async () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <PopupsProvider>
          <DropDown
            isMultiselect
            placeholder={'Выберите язык'}
            title={'Название поля'}
            list={list}
            onPress={jest.fn()}
            selectedItem={[list[1]!]}
            rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
          />
        </PopupsProvider>
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('multiselect', async () => {
    const onPress = jest.fn();

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
            isMultiselect
            placeholder={'Выберите язык'}
            title={'Название поля'}
            list={list}
            onPress={onPress}
            type={IInputsTypes.disabled}
            selectedItem={[]}
            rightIcon={<SimpleIcon name={'icon-arrow-down'} />}
          />
        </PopupsProvider>
      </SafeAreaProvider>,
    );
    const pressable = getByLabelText(LABELS.selector);
    fireEvent.press(pressable);

    const pressableSelect = getByLabelText(list[1]!.label);
    fireEvent.press(pressableSelect);

    expect(onPress).toHaveBeenCalledWith([list[1]!]);
  });
});
