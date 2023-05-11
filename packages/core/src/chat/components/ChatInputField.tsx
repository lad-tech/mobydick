import React from 'react';
import {StyleSheet} from 'react-native';

import {ITextInputProps} from '../../basic';
import {rem} from '../../styles';
import InputField from '../../inputs/components/InputField/InputField';
import useStyles from '../../styles/theme/hooks/useStyles';
import {LABELS} from '../../other';

const ChatInputField = (props: ITextInputProps) => {
  const [styles] = useStyles(stylesCreate);

  return (
    <InputField
      accessibilityLabel={LABELS.chatInputField}
      textInputContainerStyle={styles.containerStyle}
      multiline={true}
      style={styles.textInputStyle}
      {...props}
    />
  );
};

const stylesCreate = () =>
  StyleSheet.create({
    containerStyle: {
      minHeight: rem(36),
      maxHeight: rem(196),
      width: rem(267),
      borderWidth: undefined,
    },
    textInputStyle: {
      paddingTop: 0,
    },
  });

export default ChatInputField;
