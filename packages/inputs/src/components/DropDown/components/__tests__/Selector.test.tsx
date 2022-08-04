import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Selector from '../Selector';
import * as getDropDownDimensions from '../../utils/getDropDownDimensions';

describe('@npm/mobydick-inputs/Selector', () => {
  const list: string[] = ['list'];
  const renderItemOnPress = jest.fn();
  const largeList: string[] = ['1', '2', '3', '4', '5', '6', '7'];

  it('renders correctly ', async () => {
    const {toJSON, findByLabelText} = render(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
      />,
    );

    expect(toJSON()).toMatchSnapshot();

    const item = await findByLabelText(list[0] as string);
    fireEvent.press(item);

    expect(renderItemOnPress).toHaveBeenCalledWith('list');
  });
  it('renders correctly with footer component', async () => {
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
        addFlatListItemStyle={{height: 10}}
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
        addFlatListItemStyle={{height: 10}}
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
        addFlatListTextStylePressed={{backgroundColor: 'red'}}
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
        addFlatListTextFontPressed={'Bold-Error-L'}
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
        addFlatListTextFont={'Regular-Error-XXS'}
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
        addFlatListStyle={{paddingVertical: 2}}
      />,
    );

    expect(spy).toHaveBeenLastCalledWith({
      bottomIosMargin: 0,
      dropDownHeight: 48,
      flatListPaddingVertical: 2,
      listLength: 1,
      maxVisibleListLength: 6,
      navBarHeight: 50,
      pageY: 1,
      topIosMargin: 20,
    });

    rerender(
      <Selector
        list={list}
        onClose={jest.fn()}
        pageY={1}
        renderItemOnPress={renderItemOnPress}
        selectedItem={list[0]}
        addFlatListStyle={{paddingVertical: 2}}
        addButtonStyle={{height: 10}}
      />,
    );

    expect(spy).toHaveBeenLastCalledWith({
      bottomIosMargin: 0,
      dropDownHeight: 10,
      flatListPaddingVertical: 2,
      listLength: 1,
      maxVisibleListLength: 6,
      navBarHeight: 50,
      pageY: 1,
      topIosMargin: 20,
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
        addFlatListStyle={{width: 2}}
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
        addButtonStyle={{width: 2}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
