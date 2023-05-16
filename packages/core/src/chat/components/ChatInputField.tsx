import React from 'react';
import {Platform, StyleSheet} from 'react-native';

import {IThemeContext, rem} from '../../styles';
import InputField from '../../inputs/components/InputField/InputField';
import useStyles from '../../styles/theme/hooks/useStyles';
import {LABELS} from '../../other';
import {IInputFieldsProps} from '../../inputs';

const ChatInputField = (props: IInputFieldsProps) => {
  const {textInputContainerStyle, style, containerStyle, ...otherProps} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <InputField
      accessibilityLabel={LABELS.chatInputField}
      textInputContainerStyle={[styles.inputContainer, textInputContainerStyle]}
      multiline={true}
      style={[styles.textInput, style]}
      containerStyle={[styles.container, containerStyle]}
      {...otherProps}
    />
  );
};

const stylesCreate = ({spaces}: IThemeContext) =>
  StyleSheet.create({
    inputContainer: {
      minHeight: rem(38),
      maxHeight: rem(196),
      width: '100%',
      borderWidth: undefined,
      marginRight: spaces.Space2,
      marginVertical: 0,
      alignItems: 'center',
      paddingVertical: Platform.select({
        android: spaces.Space4,
        ios: spaces.Space8,
      }),
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      minWidth: undefined,
    },
    textInput: {
      paddingTop: 0,
    },
  });

export default ChatInputField;
