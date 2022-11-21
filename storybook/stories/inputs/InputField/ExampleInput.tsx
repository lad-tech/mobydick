import {InputField, IInputsTypes} from '@npm/mobydick-inputs';
import {boolean, select, text} from '@storybook/addon-knobs';
import {iconNames, rem, SimpleIcon} from '@npm/mobydick-styles';
import {action} from '@storybook/addon-actions';
import React from 'react';

const ExampleInput = () => {
  const subtitleIconName = select(
    'subtitleIcon name',
    iconNames,
    'icon-arrow-down',
  );

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
        <SimpleIcon name={select('right Icon', iconNames, 'icon-show')} />
      }
      disabled={boolean('disabled', false)}
      onChangeText={action('onChangeText')}
      containerStyle={{width: rem(250)}}
      secureTextEntry={boolean('secureTextEntry', false)}
      required={boolean('required', false)}
    />
  );
};
export default ExampleInput;
