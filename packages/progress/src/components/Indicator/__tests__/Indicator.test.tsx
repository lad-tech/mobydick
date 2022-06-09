import React from 'react';
import {render} from '@testing-library/react-native';

import Indicator from '../index';

describe('@npm/mobydick-progress/Indicator', () => {
  it('renders correctly 5 step, 10 steps', () => {
    const {toJSON} = render(<Indicator step={5} steps={10} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly 1 step, 5 steps', () => {
    const {toJSON} = render(<Indicator steps={5} step={1} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly 7 step, 7 steps', () => {
    const {toJSON} = render(<Indicator steps={7} step={7} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly 1 step, 1 steps', () => {
    const {toJSON} = render(<Indicator steps={1} step={1} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with colors', () => {
    const {toJSON} = render(
      <Indicator
        steps={7}
        step={7}
        indicatorWidth={200}
        indicatorHeight={30}
        indicatorBorderRadius={15}
        indicatorColor={'#FBCEB1'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
