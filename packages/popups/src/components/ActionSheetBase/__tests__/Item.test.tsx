import {render} from '@testing-library/react-native';
import React from 'react';
import {SimpleIcon} from '@npm/mobydick-styles';

import Item from '../Item';

describe('@npm/mobydick-popups/ActionSheetBase', () => {
  it('should renders correctly Item', () => {
    const {toJSON} = render(<Item />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Item with subtitle, textFont', () => {
    const {toJSON} = render(
      <Item
        subTitle={'subTitle'}
        textFont={'Regular-White-S'}
        title={'title'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Item with subtitle', () => {
    const {toJSON} = render(<Item subTitle={'subTitle'} title={'title'} />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Item with !selected', () => {
    const {toJSON} = render(
      <Item
        selected={['selected']}
        onPress={() => null}
        textFont={'Regular-White-S'}
        title={'title'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Item with selected ', () => {
    const {toJSON} = render(
      <Item selected={['title']} onPress={() => null} title={'title'} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Item with disabled', () => {
    const {toJSON} = render(<Item disabled={true} title={'title'} />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Item with leftIcon', () => {
    const {toJSON} = render(
      <Item leftIcon={<SimpleIcon name={'icon-copy'} />} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
