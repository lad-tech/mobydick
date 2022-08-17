import React from 'react';
import {render} from '@testing-library/react-native';

import Title from '../Title';

describe('@npm/mobydick-popups/Title', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  it('should renders correctly without titleFont', () => {
    const {toJSON} = render(<Title title={'title'} titleStyles={{flex: 1}} />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with titleFont', () => {
    const {toJSON} = render(
      <Title
        title={'title two'}
        titleStyles={{backgroundColor: '#000'}}
        titleFont={'Medium-Secondary-M'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
