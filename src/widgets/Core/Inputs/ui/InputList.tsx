import {useState} from 'react';

import Header from 'shared/ui/Header';
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
  const [about, setAbout] = useState('');
  const [isSecureTextEntry, setSecureTextEntry] = useState(false);

  return (
    <View style={styles.containerStyle}>
      <Header title={'Inputs:'} />

      <InputField
        type={IInputsTypes.default}
        title={'Login'}
        placeholder={'login'}
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
        secureTextEntry={isSecureTextEntry}
        required={true}
      />

      <InputField
        type={IInputsTypes.wrong}
        title={'Title'}
        subtitle={'Error text'}
      />

      <InputField
        type={IInputsTypes.disabled}
        title={'Disabled field'}
        disabled={true}
        subtitle={'Subtitle'}
      />

      <InputField
        type={IInputsTypes.default}
        title={'About:'}
        placeholder={'Write something'}
        multiline={true}
        value={about}
        onChangeText={setAbout}
      />
    </View>
  );
};

const styleSource = createStyles(({spaces}) => ({
  containerStyle: {
    gap: spaces.Space12,
  },
}));

export default InputList;
