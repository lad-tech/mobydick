import {act, render} from '@testing-library/react-native';
import React from 'react';

import ChatInputField from '../ChatInputField';
import {LABELS} from '../../../other';

describe('@lad-tech/mobydick-core/ChatInputField', () => {
  it('renders correctly', () => {
    const {toJSON} = render(
      <ChatInputField placeholder={'placeholder'} value={'value'} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with props', () => {
    const {toJSON} = render(
      <ChatInputField
        placeholder={'placeholder'}
        value={'value'}
        textInputContainerStyle={{width: 200}}
        style={{paddingTop: 20}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly focused/blur', () => {
    const {toJSON, getByLabelText} = render(<ChatInputField />);
    const TextInput = getByLabelText(LABELS.chatInputField);
    act(() => TextInput.props.onFocus());

    expect(toJSON()).toMatchSnapshot();

    act(() => TextInput.props.onBlur());

    expect(toJSON()).toMatchSnapshot();
  });
});
