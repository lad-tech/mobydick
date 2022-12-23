import {render} from '@testing-library/react-native';
import React from 'react';

import ModalLoading from '../ModalLoading';

describe('@npm/mobydick-core/modalLoading', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(
      <ModalLoading
        title={'title'}
        descriptionText={'descriptionText'}
        id={'id'}
        onClose={() => null}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with optional', () => {
    const {toJSON} = render(
      <ModalLoading
        title={'title'}
        descriptionText={'descriptionText'}
        buttonText={'buttonText'}
        id={'id'}
        onClose={() => null}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
