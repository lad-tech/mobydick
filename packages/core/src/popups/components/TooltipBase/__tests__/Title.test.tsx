import {render} from '@testing-library/react-native';
import React from 'react';

import Title from '../Title';

describe('@lad-tech/mobydick-core/TooltipBase/Title', () => {
  it('should renders correctly font', () => {
    const {toJSON} = render(
      <Title
        title={'title'}
        titleFont={'Regular-Primary-XS'}
        titleStyles={{width: 100}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly', () => {
    const {toJSON} = render(<Title title={'title'} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
