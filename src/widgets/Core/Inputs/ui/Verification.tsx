import {useCallback, useRef, useState} from 'react';
import {Keyboard, StyleSheet, TextInput} from 'react-native';

import Header from './Header';

import {CodeField, createStyles, useStyles, View} from 'shared/ui';

const Verification = () => {
  const [styles] = useStyles(styleSource);
  const input0 = useRef<TextInput>(null);
  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);

  const [char0, writeChar0] = useState<string>('');
  const [char1, writeChar1] = useState<string>('');
  const [char2, writeChar2] = useState<string>('');
  const [char3, writeChar3] = useState<string>('');

  const onLayout = useCallback(() => input0?.current?.focus(), []);

  const onChangeText0 = useCallback((text: string) => {
    writeChar0(text);
    text.length && input1.current?.focus();
  }, []);
  const onBackKeyPress0 = useCallback(() => {
    if (char0 === '') {
      Keyboard.dismiss();
    }
  }, [char0]);

  const onChangeText1 = useCallback((text: string) => {
    writeChar1(text);
    text.length && input2.current?.focus();
  }, []);

  const onBackKeyPress1 = useCallback(() => {
    if (char1 === '') {
      input0.current?.focus();
    }
  }, [char1]);

  const onChangeText2 = useCallback((text: string) => {
    writeChar2(text);
    text.length && input3.current?.focus();
  }, []);
  const onBackKeyPress2 = useCallback(() => {
    if (char2 === '') {
      input1.current?.focus();
    }
  }, [char2]);

  const onChangeText3 = useCallback((text: string) => {
    writeChar3(text);
    text.length && Keyboard.dismiss();
  }, []);
  const onBackKeyPress3 = useCallback(() => {
    if (char3 === '') {
      input2.current?.focus();
    }
  }, [char3]);

  return (
    <View style={styles.wrapper}>
      <Header title={'CodeField:'} />
      <View style={styles.container} onLayout={onLayout}>
        <CodeField
          value={char0}
          ref={input0}
          onChangeText={onChangeText0}
          onBackKeyPress={onBackKeyPress0}
          textInputContainerStyle={styles.textInputContainerStyle}
          selection={{start: char0.length, end: char0.length}}
        />
        <CodeField
          value={char1}
          ref={input1}
          onChangeText={onChangeText1}
          onBackKeyPress={onBackKeyPress1}
          selection={{start: char1.length, end: char1.length}}
        />
        <View style={styles.borderStyle} />
        <CodeField
          value={char2}
          ref={input2}
          onChangeText={onChangeText2}
          onBackKeyPress={onBackKeyPress2}
          textInputContainerStyle={styles.textInputContainerStyle}
          selection={{start: char2.length, end: char2.length}}
        />
        <CodeField
          value={char3}
          ref={input3}
          onChangeText={onChangeText3}
          onBackKeyPress={onBackKeyPress3}
          selection={{start: char3.length, end: char3.length}}
        />
      </View>
    </View>
  );
};

const styleSource = createStyles(theme => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
    wrapper: {
      marginBottom: spaces.Space12,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: spaces.Space12,
    },
    textInputContainerStyle: {
      marginRight: spaces.Space12,
    },
    borderStyle: {
      width: spaces.Space16,
      height: spaces.Space2,
      backgroundColor: colors.BorderNormal,
      marginHorizontal: spaces.Space6,
    },
  });
});

export default Verification;
