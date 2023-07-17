import {render} from '@testing-library/react-native';
import React from 'react';

import ModalError from '../ModalError';

describe('@lad-tech/mobydick-core/modalError', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(
      <ModalError
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
      <ModalError
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
