import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Toggle} from '../index';
import {LABELS} from '../../../other';

describe('Toggle', () => {
  it('should renders correctly by default', function () {
    const fn = jest.fn();
    const {toJSON} = render(
      <Toggle active={false} disabled={false} onPress={fn} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly active', function () {
    const fn = jest.fn();
    const {toJSON, getByLabelText} = render(
      <Toggle active disabled={false} onPress={fn} />,
    );

    const onPress = getByLabelText(LABELS.togglePress);
    fireEvent.press(onPress);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly disabled', function () {
    const fn = jest.fn();
    const {toJSON} = render(<Toggle active={false} disabled onPress={fn} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly active and disabled', function () {
    const fn = jest.fn();
    const {toJSON} = render(<Toggle active disabled onPress={fn} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
