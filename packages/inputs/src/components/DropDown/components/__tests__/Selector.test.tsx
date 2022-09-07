import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Selector from '../Selector';
import * as getDropDownDimensions from '../../utils/getDropDownDimensions';

describe('@npm/mobydick-inputs/Selector', () => {
  const list = [{label: 'list', value: 'list'}];
  const renderItemOnPress = jest.fn();
  const largeList = [
    {label: '1', value: '1'},
    {label: '1', value: '1'},
    {label: '1', value: '1'},
    {label: '1', value: '1'},
    {label: '1', value: '1'},
    {label: '1', value: '1'},
    {label: '1', value: '1'},
  ];

  it('renders correctly ', async () => {
    const inputList = [{label: 'list', value: 'list'}] as const;
    const {toJSON, findByLabelText} = render(
      <Selector
        list={[...inputList]}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
      />,
    );

    expect(toJSON()).toMatchSnapshot();

    const item = await findByLabelText(inputList[0].label);
    fireEvent.press(item);

    expect(renderItemOnPress).toHaveBeenCalledWith(inputList[0]);
  });
  it('renders correctly with bottom padding', async () => {
    const {toJSON} = render(
      <Selector
        list={largeList}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('render correct renderItem TouchableHighlight with custom style', () => {
    const {toJSON, rerender} = render(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
        flatListItemStyle={{height: 10}}
        selectedItem={list[0]}
        selectedItemColor={'red'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();

    rerender(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
        flatListItemStyle={{height: 10}}
        selectedItem={list[0]}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('render correct renderItem Typography with custom style ', () => {
    const {toJSON} = render(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
        flatListTextStylePressed={{backgroundColor: 'red'}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('render correct renderItem Typography  with custom font ', () => {
    const {toJSON, rerender} = render(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
        selectedItem={list[0]}
        flatListTextFontPressed={'Bold-Error-L'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();

    rerender(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
        selectedItem={list[0]}
      />,
    );

    expect(toJSON()).toMatchSnapshot();

    rerender(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
        flatListTextFont={'Regular-Error-XXS'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();

    rerender(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('How props Selector affect getDropDownDimensions', () => {
    const spy = jest.spyOn(getDropDownDimensions, 'getDropDownDimensions');
    const {rerender} = render(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
        selectedItem={list[0]}
        flatListStyle={{paddingVertical: 2}}
      />,
    );

    expect(spy).toHaveBeenLastCalledWith({
      addFlatListItemHeight: undefined,
      dropDownBorderWidth: 1,
      dropDownHeight: 48,
      flatListPaddingVertical: 2,
      listLength: 1,
      maxVisibleListLength: 6,
      navBarHeight: 50,
      pageY: 1,
    });

    rerender(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
        selectedItem={list[0]}
        flatListStyle={{paddingVertical: 2}}
        buttonStyle={{height: 10}}
      />,
    );

    expect(spy).toHaveBeenLastCalledWith({
      addFlatListItemHeight: undefined,
      dropDownBorderWidth: 1,
      dropDownHeight: 10,
      flatListPaddingVertical: 2,
      listLength: 1,
      maxVisibleListLength: 6,
      navBarHeight: 50,
      pageY: 1,
    });
  });

  it('Selector custom flatList styles', () => {
    const {toJSON, rerender} = render(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
        selectedItem={list[0]}
        flatListStyle={{width: 2}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();

    rerender(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1000000}
        renderItemOnPress={renderItemOnPress}
        selectedItem={list[0]}
        buttonStyle={{width: 2}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();

    rerender(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1000000}
        renderItemOnPress={renderItemOnPress}
        selectedItem={list[0]}
        buttonStyle={{width: 2, borderWidth: 2}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
