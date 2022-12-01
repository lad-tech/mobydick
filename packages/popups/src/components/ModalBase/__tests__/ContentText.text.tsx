import React from 'react';
import {render} from '@testing-library/react-native';

import ContentText from '../ContentText';

describe('@npm/mobydick-popups/Title', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  it('should renders correctly without titleFont', () => {
    const {toJSON} = render(
      <ContentText title={'title'} titleStyles={{flex: 1}} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with titleFont', () => {
    const {toJSON} = render(
      <ContentText
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
      <ContentText
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
      <ContentText
        descriptionText={'description text two'}
        descriptionStyles={{backgroundColor: '#000'}}
        descriptionFont={'Medium-Secondary-M'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
