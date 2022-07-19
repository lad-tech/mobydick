import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from '@npm/mobydick-core';

import CheckBox from '../CheckBox';

describe('CheckBox', () => {
  it('should renders correctly', function () {
    const {toJSON} = render(
      <CheckBox value={'Pepega'}>
        <Text>Pepega</Text>
      </CheckBox>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly checked', function () {
    const {toJSON} = render(
      <CheckBox value={'Pepega'} selected>
        <Text>Pepega</Text>
      </CheckBox>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly disabled', function () {
    const {toJSON} = render(
      <CheckBox value={'Pepega'} disabled>
        <Text>Pepega</Text>
      </CheckBox>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
