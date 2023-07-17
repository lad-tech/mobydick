import React from 'react';
import {render} from '@testing-library/react-native';

import ModalBase from '../ModalBase';

describe('@lad-tech/mobydick-core/ModalBase', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  it('should renders correctly', () => {
    const {toJSON} = render(<ModalBase id={'id'} onClose={() => null} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
