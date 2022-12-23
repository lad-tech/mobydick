import {render} from '@testing-library/react-native';
import React from 'react';

import {IButtonTypes} from '../../../../cta/components/Button/types';
import ModalError from '../ModalError';

describe('@npm/mobydick-core/modalError', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(
      <ModalError
        title={'title'}
        descriptionText={'descriptionText'}
        onPressRight={() => null}
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
        onPressRight={() => null}
        typeRight={IButtonTypes.primary}
        textRight={'textRight'}
        typeLeft={IButtonTypes.primary}
        textLeft={'textLeft'}
        id={'id'}
        onClose={() => null}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
