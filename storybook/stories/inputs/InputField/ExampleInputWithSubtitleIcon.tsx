import {InputField, ITypes} from '@npm/mobydick-inputs';
import {boolean, select, text} from '@storybook/addon-knobs';
import {iconNames, rem, Show, SimpleIconName} from '@npm/mobydick-styles';
import {action} from '@storybook/addon-actions';
import React from 'react';

const ExampleInputWithSubtitleIcon = () => {
  return (
    <InputField
      type={select('type', ITypes, ITypes.default)}
      title={text('title', 'Название поля')}
      placeholder={text('Placeholder', 'Введите что-нибудь')}
      subtitle={text('subtitle', 'Подпись')}
      subtitleIcon={
        select(
          'subtitleIcon name',
          iconNames,
          'icon-arrow-down',
        ) as SimpleIconName
      }
      rightIcon={
        <Show
          onPress={action('onPressRightIcon')}
          width={rem(24)}
          height={rem(24)}
        />
      }
      disabled={boolean('disabled', false)}
      onChangeText={action('onChangeText')}
      textInputContainerStyle={{width: rem(250)}}
    />
  );
};

export default ExampleInputWithSubtitleIcon;
