import React from 'react';
import {StyleSheet} from 'react-native';

import {rem} from '../../styles';
import InputField from '../../inputs/components/InputField/InputField';
import useStyles from '../../styles/theme/hooks/useStyles';
import {LABELS} from '../../other';
import {IInputFieldsProps} from '../../inputs';

const ChatInputField = (props: IInputFieldsProps) => {
  const {textInputContainerStyle, style, ...otherProps} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <InputField
      accessibilityLabel={LABELS.chatInputField}
      textInputContainerStyle={[styles.containerStyle, textInputContainerStyle]}
      multiline={true}
      style={[styles.textInputStyle, style]}
      {...otherProps}
    />
  );
};

const stylesCreate = () =>
  StyleSheet.create({
    containerStyle: {
      minHeight: rem(36),
      maxHeight: rem(196),
      width: rem(245),
      borderWidth: undefined,
    },
    textInputStyle: {
      paddingTop: 0,
    },
  });

export default ChatInputField;
