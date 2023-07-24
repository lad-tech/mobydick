import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {
  IInputsTypes,
  InputField,
  Pressable,
  rem,
  SimpleIcon,
  SimpleIconName,
  useStyles,
} from '@lad-tech/mobydick-core';

const ExampleInput = ({
  subtitleIconName,
  type,
  title,
  placeholder,
  subtitle,
  disabled,
  required,
  maxHeightMultiline,
  showSubtitleIcon,
  rightIcon,
}: {
  subtitleIconName: SimpleIconName;
  type: IInputsTypes;
  title: string;
  placeholder: string;
  subtitle: string;
  disabled: boolean;
  required: boolean;
  maxHeightMultiline: number;
  showSubtitleIcon: boolean;
  rightIcon: SimpleIconName;
}) => {
  const [styles] = useStyles(createStyles);
  const [isSecureTextEntry, setSecureTextEntry] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const [valueMultiline, setValueMultiline] = useState('');

  return (
    <>
      <InputField
        type={type}
        title={title}
        placeholder={placeholder}
        subtitle={subtitle}
        subtitleIcon={showSubtitleIcon ? subtitleIconName : undefined}
        rightIcon={
          <Pressable onPress={() => setSecureTextEntry(!isSecureTextEntry)}>
            <SimpleIcon name={rightIcon} />
          </Pressable>
        }
        disabled={disabled}
        onChangeText={setValueInput}
        containerStyle={styles.containerStyle}
        secureTextEntry={isSecureTextEntry}
        required={required}
        value={valueInput}
      />
      <InputField
        type={type}
        title={title}
        placeholder={placeholder}
        subtitle={subtitle}
        subtitleIcon={showSubtitleIcon ? subtitleIconName : undefined}
        disabled={disabled}
        onChangeText={setValueMultiline}
        containerStyle={[
          styles.containerStyle,
          {
            maxHeight: rem(maxHeightMultiline),
          },
        ]}
        secureTextEntry={isSecureTextEntry}
        required={required}
        value={valueMultiline}
        multiline={true}
      />
    </>
  );
};

const createStyles = () =>
  StyleSheet.create({
    containerStyle: {
      width: rem(250),
      paddingBottom: rem(50),
    },
  });

export default ExampleInput;
