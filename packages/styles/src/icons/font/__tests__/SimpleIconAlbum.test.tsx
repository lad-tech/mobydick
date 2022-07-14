import React from 'react';
import {render} from '@testing-library/react-native';

import SimpleIconAlbum from '../SimpleIconAlbum';

describe('@npm/mobydick-styles/icons/SimpleIconAlbum', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<SimpleIconAlbum />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with color', () => {
    const {toJSON} = render(<SimpleIconAlbum color="#333" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
