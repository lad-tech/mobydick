import React from 'react';
import {render} from '@testing-library/react-native';

import TextContent from '../TextContent';

describe('@npm/mobydick-popups/Title', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  it('should renders correctly without titleFont', () => {
    const {toJSON} = render(
      <TextContent title={'title'} titleStyles={{flex: 1}} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with titleFont', () => {
    const {toJSON} = render(
      <TextContent
        title={'title two'}
        titleStyles={{backgroundColor: '#000'}}
        titleFont={'Medium-Secondary-M'}
        descriptionText={'descriptionText'}
        descriptionStyles={{flex: 1}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly without descriptionFont', () => {
    const {toJSON} = render(
      <TextContent
        descriptionText={'descriptionText'}
        descriptionStyles={{flex: 1}}
        title={'title'}
        titleStyles={{flex: 1}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with descriptionFont', () => {
    const {toJSON} = render(
      <TextContent
        descriptionText={'description text two'}
        descriptionStyles={{backgroundColor: '#000'}}
        descriptionFont={'Medium-Secondary-M'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
