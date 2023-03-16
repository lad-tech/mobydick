import {boolean, select, text} from '@storybook/addon-knobs';
import React, {useState} from 'react';

import {
  InputField,
  IInputsTypes,
  iconNames,
  rem,
  SimpleIcon,
  Pressable,
} from '@npm/mobydick-core';

const ExampleInput = () => {
  const subtitleIconName = select(
    'subtitleIcon name',
    iconNames,
    'icon-arrow-down',
  );
  const [isSecureTextEntry, setSecureTextEntry] = useState(false);
  const [value, setValue] = useState('');

  return (
    <InputField
      type={select('type', IInputsTypes, IInputsTypes.default)}
      title={text('title', 'Название поля')}
      placeholder={text('Placeholder', 'Введите что-нибудь')}
      subtitle={text('subtitle', 'Подпись')}
      subtitleIcon={
        boolean('show subtitleIcon', false) ? subtitleIconName : undefined
      }
      rightIcon={
        <Pressable onPress={() => setSecureTextEntry(!isSecureTextEntry)}>
          <SimpleIcon name={select('right Icon', iconNames, 'icon-show')} />
        </Pressable>
      }
      disabled={boolean('disabled', false)}
      onChangeText={setValue}
      containerStyle={{width: rem(250), paddingBottom: 50}}
      secureTextEntry={isSecureTextEntry}
      required={boolean('required', false)}
      value={value}
      multiline={boolean('multiline', false)}
    />
  );
};
export default ExampleInput;
