import {Button, ISize, ITypes} from '@npm/mobydick-cta';
import {boolean, number, select, text} from '@storybook/addon-knobs';
import {iconNames, SimpleIcon} from '@npm/mobydick-styles';
import React from 'react';
import {action} from '@storybook/addon-actions';

enum IViewButton {
  leftIcon = 'leftIcon',
  noIcon = 'noIcon',
  rightIcon = 'rightIcon',
  counter = 'counter',
  onlyIcon = 'onlyIcon',
}

const getColorICon = (type: ITypes): string => {
  switch (type) {
    case ITypes.secondary:
    case ITypes.tertiary:
      return '#2B78EE';
    case ITypes.primary:
    case ITypes.disabled:
    case ITypes.destructive:
    default:
      return '#fff';
  }
};

const ExampleButton = () => {
  const type = select('type', ITypes, ITypes.primary);
  const textButton = text('text', 'text big text');
  const minWidth = number('minWidth', 0);
  const onPress = action('onPress');
  const size = select('size', ISize, ISize.small);
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);

  switch (select('view button', IViewButton, IViewButton.noIcon)) {
    case IViewButton.leftIcon:
      return (
        <Button
          text={textButton}
          onPress={onPress}
          type={type}
          disabled={disabled}
          loading={loading}
          size={size}
          leftIcon={
            <SimpleIcon
              name={select('left icon', iconNames, 'icon-plus')}
              color={getColorICon(type)}
              size={24}
            />
          }
          style={{minWidth: minWidth}}
        />
      );
    case IViewButton.rightIcon:
      return (
        <Button
          text={textButton}
          onPress={onPress}
          type={type}
          disabled={disabled}
          loading={loading}
          size={size}
          rightIcon={
            <SimpleIcon
              name={select('left icon', iconNames, 'icon-plus')}
              color={'#fff'}
              size={24}
            />
          }
          style={{minWidth: minWidth}}
        />
      );
    case IViewButton.onlyIcon:
      return (
        <Button
          onPress={onPress}
          type={type}
          disabled={disabled}
          loading={loading}
          size={size}
          rightIcon={
            <SimpleIcon
              name={select('left icon', iconNames, 'icon-plus')}
              color={'#fff'}
              size={24}
            />
          }
          style={{minWidth: minWidth}}
        />
      );
    case IViewButton.noIcon:
    default:
      return (
        <Button
          text={textButton}
          onPress={onPress}
          type={type}
          disabled={disabled}
          loading={loading}
          size={size}
          style={{minWidth: minWidth}}
        />
      );
  }
};

export default ExampleButton;
