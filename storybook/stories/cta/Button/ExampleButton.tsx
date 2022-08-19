import {Button, ISize, ITypes} from '@npm/mobydick-cta';
import {boolean, number, select, text} from '@storybook/addon-knobs';
import {iconNames, SimpleIcon} from '@npm/mobydick-styles';
import React from 'react';

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

  switch (select('view button', IViewButton, IViewButton.noIcon)) {
    case IViewButton.leftIcon:
      return (
        <Button
          text={text('text', 'text big text')}
          onPress={() => {
            console.log('onPress');
          }}
          type={type}
          disabled={boolean('disabled', false)}
          loading={boolean('loading', false)}
          size={select('size', ISize, ISize.small)}
          leftIcon={
            <SimpleIcon
              name={select('left icon', iconNames, 'icon-plus')}
              color={getColorICon(type)}
              size={24}
            />
          }
          style={{minWidth: number('minWidth', 0)}}
        />
      );
    case IViewButton.rightIcon:
      return (
        <Button
          text={text('text', 'text big text')}
          onPress={() => {
            console.log('onPress');
          }}
          type={type}
          disabled={boolean('disabled', false)}
          loading={boolean('loading', false)}
          size={select('size', ISize, ISize.small)}
          rightIcon={
            <SimpleIcon
              name={select('left icon', iconNames, 'icon-plus')}
              color={'#fff'}
              size={24}
            />
          }
          style={{minWidth: number('minWidth', 0)}}
        />
      );
    case IViewButton.onlyIcon:
      return (
        <Button
          onPress={() => {
            console.log('onPress');
          }}
          type={type}
          disabled={boolean('disabled', false)}
          loading={boolean('loading', false)}
          size={select('size', ISize, ISize.small)}
          rightIcon={
            <SimpleIcon
              name={select('left icon', iconNames, 'icon-plus')}
              color={'#fff'}
              size={24}
            />
          }
          style={{minWidth: number('minWidth', 0)}}
        />
      );
    case IViewButton.noIcon:
    default:
      return (
        <Button
          text={text('text', 'text big text')}
          onPress={() => {
            console.log('onPress');
          }}
          type={type}
          disabled={boolean('disabled', false)}
          loading={boolean('loading', false)}
          size={select('size', ISize, ISize.small)}
          style={{minWidth: number('minWidth', 0)}}
        />
      );
  }
};

export default ExampleButton;
