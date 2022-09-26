import {InputField, ITypes} from '@npm/mobydick-inputs';
import {boolean, select, text} from '@storybook/addon-knobs';
import {iconNames, rem, SimpleIcon} from '@npm/mobydick-styles';
import {action} from '@storybook/addon-actions';
import React from 'react';

const ExampleInput = () => {
  return (
    <InputField
      type={select('type', ITypes, ITypes.default)}
      title={text('title', 'Название поля')}
      placeholder={text('Placeholder', 'Введите что-нибудь')}
      subtitle={text('subtitle', 'Подпись')}
      rightIcon={
        <SimpleIcon name={select('right Icon', iconNames, 'icon-show')} />
      }
      disabled={boolean('disabled', false)}
      onChangeText={action('onChangeText')}
      textInputContainerStyle={{width: rem(250)}}
    />
  );
};
export default ExampleInput;
