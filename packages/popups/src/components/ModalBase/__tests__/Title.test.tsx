import React from 'react';
import {render} from '@testing-library/react-native';
import Title from '@npm/mobydick-popups/src/components/ModalBase/Title';

describe('@npm/mobydick-popups/Title', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(<Title title={'title'} titleStyles={{flex: 1}} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
