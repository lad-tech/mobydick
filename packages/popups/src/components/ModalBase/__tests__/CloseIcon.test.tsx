import React from 'react';
import {render} from '@testing-library/react-native';
import CloseIcon from '@npm/mobydick-popups/src/components/ModalBase/CloseIcon';

describe('@npm/mobydick-popups/CloseIcon', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  it('should renders correctly', () => {
    const {toJSON} = render(<CloseIcon onPress={() => null} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
