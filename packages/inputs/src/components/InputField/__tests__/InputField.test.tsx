import React from 'react';
import {act, render} from '@testing-library/react-native';

import InputField from '../InputField';
import Constants from '../constants';
import {ITypes} from '../../types';

describe('@npm/mobydick-inputs/InputField', () => {
  it('renders correctly', () => {
    const {toJSON} = render(
      <InputField
        title={'title'}
        subtitle={'subtitle'}
        subtitleIcon={'icon-account'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly valid', () => {
    const {toJSON, getByTestId} = render(<InputField type={ITypes.valid} />);

    expect(toJSON()).toMatchSnapshot();

    const TextInput = getByTestId(Constants.testID);
    act(() => TextInput.props.onFocus());

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly wrong', () => {
    const {toJSON, getByTestId} = render(
      <InputField
        type={ITypes.wrong}
        subtitle={'subtitle'}
        subtitleIcon={'icon-account'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();

    const TextInput = getByTestId(Constants.testID);
    act(() => TextInput.props.onFocus());

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly disabled', () => {
    const {toJSON, getByTestId} = render(
      <InputField type={ITypes.disabled} disabled={true} />,
    );

    expect(toJSON()).toMatchSnapshot();

    const TextInput = getByTestId(Constants.testID);
    act(() => TextInput.props.onFocus());

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly focused/blur', () => {
    const {toJSON, getByTestId} = render(<InputField />);
    const TextInput = getByTestId(Constants.testID);
    act(() => TextInput.props.onFocus());

    expect(toJSON()).toMatchSnapshot();

    act(() => TextInput.props.onBlur());

    expect(toJSON()).toMatchSnapshot();
  });
});
