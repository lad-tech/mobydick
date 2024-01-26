import {act, render} from '@testing-library/react-native';
import {Platform} from 'react-native';

import InputField from '../InputField';
import Constants from '../constants';
import {IInputsTypes} from '../../types';

describe('@lad-tech/mobydick-core/InputField', () => {
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
    const {toJSON, getByTestId} = render(
      <InputField type={IInputsTypes.valid} />,
    );

    expect(toJSON()).toMatchSnapshot();

    const TextInput = getByTestId(Constants.testID);
    act(() => TextInput.props.onFocus());

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly wrong', () => {
    const {toJSON, getByTestId} = render(
      <InputField
        type={IInputsTypes.wrong}
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
      <InputField type={IInputsTypes.disabled} disabled={true} />,
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
  it('renders correctly secureTextEntry', () => {
    Platform.OS = 'android';
    const {toJSON} = render(
      <InputField
        title={'title'}
        subtitle={'subtitle'}
        subtitleIcon={'icon-account'}
        secureTextEntry={true}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly multiline = true', () => {
    Platform.OS = 'android';
    const {toJSON} = render(<InputField title={'title'} multiline={true} />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly multiline = false', () => {
    Platform.OS = 'android';
    const {toJSON} = render(<InputField title={'title'} multiline={false} />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders title titleProps', () => {
    const {toJSON} = render(
      <InputField title={'title'} titleProps={{font: 'Medium-Tertiary-S'}} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
