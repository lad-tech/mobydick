import {useState} from 'react';
import {StyleSheet} from 'react-native';

import Header from './Header';

import {
  createStyles,
  IInputsTypes,
  InputField,
  Pressable,
  SimpleIcon,
  useStyles,
  View,
} from 'shared/ui';

const InputList = () => {
  const [styles] = useStyles(styleSource);
  const [isSecureTextEntry, setSecureTextEntry] = useState(false);

  return (
    <View style={styles.containerStyle}>
      <Header title={'Inputs:'} />

      <InputField
        type={IInputsTypes.default}
        title={'Login'}
        placeholder={'login'}
        containerStyle={styles.containerStyle}
        required={true}
      />

      <InputField
        type={IInputsTypes.valid}
        title={'Password'}
        placeholder={'password'}
        rightIcon={
          <Pressable onPress={() => setSecureTextEntry(!isSecureTextEntry)}>
            <SimpleIcon name={isSecureTextEntry ? 'icon-show' : 'icon-hide'} />
          </Pressable>
        }
        containerStyle={styles.containerStyle}
        secureTextEntry={isSecureTextEntry}
        required={true}
      />

      <InputField
        type={IInputsTypes.wrong}
        title={'Title'}
        containerStyle={styles.containerStyle}
        subtitle={'Error text'}
      />

      <InputField
        type={IInputsTypes.disabled}
        title={'Disabled field'}
        disabled={true}
        containerStyle={styles.containerStyle}
        subtitle={'Subtitle'}
      />

      <InputField
        type={IInputsTypes.default}
        title={'About:'}
        placeholder={'Write something'}
        multiline={true}
        secureTextEntry={isSecureTextEntry}
      />
    </View>
  );
};

const styleSource = createStyles(({spaces}) => {
  return StyleSheet.create({
    containerStyle: {
      marginBottom: spaces.Space12,
    },
  });
});

export default InputList;
