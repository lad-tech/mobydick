import {render} from '@testing-library/react-native';
import React from 'react';

import Label from '../Label';

describe('@npm/mobydick-popups/ActionSheetBase', () => {
  it('should renders correctly Label', () => {
    const {toJSON} = render(<Label label={'label'} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
