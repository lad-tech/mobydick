import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import Item from '../Item';
import {IItemType} from '../types';
import Constants from '../../PopupBase/constants';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';

describe('@npm/mobydick-core/ActionSheetBase', () => {
  it('should renders correctly Item', () => {
    const {toJSON} = render(
      <Item title={'title'} itemType={IItemType.cancelItem} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Item with  textFont', () => {
    const {toJSON} = render(
      <Item
        textFont={'Regular-White-S'}
        itemType={IItemType.firstItem}
        title={'title'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly inner item', () => {
    const {toJSON} = render(
      <Item
        textFont={'Regular-White-S'}
        itemType={IItemType.innerItem}
        title={'title'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Item with !selected', () => {
    const {toJSON} = render(
      <Item
        itemType={IItemType.lastItem}
        radio={'selected'}
        onPress={() => null}
        textFont={'Regular-White-S'}
        title={'title'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Item with selected', () => {
    const {toJSON} = render(
      <Item
        itemType={IItemType.singleItem}
        checkboxList={['title']}
        onPress={() => null}
        title={'title'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Item with disabled', () => {
    const {toJSON} = render(
      <Item disabled={true} itemType={IItemType.cancelItem} title={'title'} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Item with leftIcon', () => {
    const {toJSON, getByLabelText} = render(
      <Item
        itemType={IItemType.cancelItem}
        title={'title'}
        leftIcon={<SimpleIcon name={'icon-copy'} />}
        isStatusPressedForTest
      />,
    );
    const pressableItem = getByLabelText(
      Constants.accessibilityLabelActionSheetsItem,
    );
    fireEvent.press(pressableItem);

    expect(toJSON()).toMatchSnapshot();
  });
});
