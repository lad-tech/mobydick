import {render} from '@testing-library/react-native';
import React from 'react';
import {SimpleIcon} from '@npm/mobydick-styles';

import Item from '../Item';
import {IItemType} from '../types';

describe('@npm/mobydick-popups/ActionSheetBase', () => {
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
  it('should renders correctly Item with selected ', () => {
    const {toJSON} = render(
      <Item
        itemType={IItemType.singleItem}
        radio={'title'}
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
    const {toJSON} = render(
      <Item
        itemType={IItemType.cancelItem}
        title={'title'}
        leftIcon={<SimpleIcon name={'icon-copy'} />}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
