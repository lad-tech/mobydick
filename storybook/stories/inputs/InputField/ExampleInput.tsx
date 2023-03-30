import {boolean, number, select, text} from '@storybook/addon-knobs';
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
  const [valueInput, setValueInput] = useState('');
  const [valueMultiline, setValueMultiline] = useState('');
  const type = select('type', IInputsTypes, IInputsTypes.default);
  const title = text('title', 'Название поля');
  const placeholder = text('Placeholder', 'Введите что-нибудь');
  const subtitle = text('subtitle', 'Подпись');
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const maxHeightMultiline = number('maxHeight', 200);

  return (
    <>
      <InputField
        type={type}
        title={title}
        placeholder={placeholder}
        subtitle={subtitle}
        subtitleIcon={
          boolean('show subtitleIcon', false) ? subtitleIconName : undefined
        }
        rightIcon={
          <Pressable onPress={() => setSecureTextEntry(!isSecureTextEntry)}>
            <SimpleIcon name={select('right Icon', iconNames, 'icon-show')} />
          </Pressable>
        }
        disabled={disabled}
        onChangeText={setValueInput}
        containerStyle={{width: rem(250), paddingBottom: 50}}
        secureTextEntry={isSecureTextEntry}
        required={required}
        value={valueInput}
      />
      <InputField
        type={type}
        title={title}
        placeholder={placeholder}
        subtitle={subtitle}
        subtitleIcon={
          boolean('show subtitleIcon', false) ? subtitleIconName : undefined
        }
        disabled={disabled}
        onChangeText={setValueMultiline}
        containerStyle={{
          width: rem(250),
          paddingBottom: rem(50),
          maxHeight: rem(maxHeightMultiline),
        }}
        secureTextEntry={isSecureTextEntry}
        required={required}
        value={valueMultiline}
        multiline={true}
      />
    </>
  );
};
export default ExampleInput;
