import {render} from '@testing-library/react-native';
import React from 'react';

import ModalSuccess from '../ModalSuccess';

describe('@npm/mobydick-popups/modalSuccess', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(
      <ModalSuccess
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
      <ModalSuccess
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
