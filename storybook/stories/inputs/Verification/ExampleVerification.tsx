import React, {useRef, useState} from 'react';
import {
  TouchableOpacity,
  View,
  useStyles,
  Typography,
  CodeField,
} from '@npm/mobydick-core';
import {Keyboard, TextInput} from 'react-native';

import stylesCreate from './stylesCreate';

const ExampleVerification = () => {
  const [styles] = useStyles(stylesCreate);
  const input0 = useRef<TextInput>(null);
  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);

  const [char0, writeChar0] = useState<string>('');
  const [char1, writeChar1] = useState<string>('');
  const [char2, writeChar2] = useState<string>('');
  const [char3, writeChar3] = useState<string>('');

  return (
    <View>
      <View style={styles.container} onLayout={() => input0?.current?.focus()}>
        <CodeField
          value={char0}
          ref={input0}
          onChangeText={(text: string) => {
            writeChar0(text);
            text.length && input1.current?.focus();
          }}
          onBackKeyPress={() => {
            if (char0 === '') {
              Keyboard.dismiss();
            }
          }}
          textInputContainerStyle={styles.textInputContainerStyle}
        />
        <CodeField
          value={char1}
          ref={input1}
          onChangeText={(text: string) => {
            writeChar1(text);
            text.length && input2.current?.focus();
          }}
          onBackKeyPress={() => {
            if (char1 === '') {
              input0.current?.focus();
            }
          }}
        />
        <View style={styles.borderStyle} />
        <CodeField
          value={char2}
          ref={input2}
          onChangeText={(text: string) => {
            writeChar2(text);
            text.length && input3.current?.focus();
          }}
          onBackKeyPress={() => {
            if (char2 === '') {
              input1.current?.focus();
            }
          }}
          textInputContainerStyle={styles.textInputContainerStyle}
        />
        <CodeField
          value={char3}
          ref={input3}
          onChangeText={(text: string) => {
            writeChar3(text);
            text.length && Keyboard.dismiss();
          }}
          onBackKeyPress={() => {
            if (char3 === '') {
              input2.current?.focus();
            }
          }}
        />
      </View>
      <View style={styles.stringView}>
        <Typography font={'Medium-Muted-XS'}>
          {'Повторный звонок 01:59'}
        </Typography>
        <TouchableOpacity>
          <Typography font={'Medium-Accent-XS'}>{'Нет звонка?'}</Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExampleVerification;
