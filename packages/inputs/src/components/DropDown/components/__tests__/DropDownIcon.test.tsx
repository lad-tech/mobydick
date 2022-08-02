import React from 'react';
import {render} from '@testing-library/react-native';
import {SimpleIcon} from '@npm/mobydick-styles';

import Icon from '../DropDownIcon';

describe('@npm/mobydick-inputs/DropDownIcon', () => {
  it('renders correctly standart open', () => {
    const {toJSON} = render(<Icon isOpen={true} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly standart close', () => {
    const {toJSON} = render(<Icon isOpen={false} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly custom open', () => {
    const {toJSON} = render(
      <Icon isOpen={true} rightIcon={<SimpleIcon name={'icon-calendar'} />} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly custom close', () => {
    const {toJSON} = render(
      <Icon isOpen={false} rightIcon={<SimpleIcon name={'icon-calendar'} />} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
