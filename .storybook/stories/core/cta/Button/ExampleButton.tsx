import React, {useCallback} from 'react';
import {action} from '@storybook/addon-actions';

import {
  Button,
  IButtonSize,
  IButtonTypes,
  SimpleIcon,
  SimpleIconName,
  TypographyProp,
  useTheme,
} from '@lad-tech/mobydick-core';

export enum IViewButton {
  leftIcon = 'leftIcon',
  noIcon = 'noIcon',
  rightIcon = 'rightIcon',
  onlyIcon = 'onlyIcon',
}

const ExampleButton = ({
  type,
  textButton,
  minWidth,
  size,
  disabled,
  font,
  loading,
  viewButton,
  leftIcon,
  count,
}: {
  type: IButtonTypes;
  size: IButtonSize;
  textButton: string;
  minWidth: number;
  disabled: boolean;
  loading: boolean;
  font: TypographyProp;
  viewButton: IViewButton;
  leftIcon: SimpleIconName;
  count: number;
}) => {
  const {colors} = useTheme();
  const onPress = action('onPress');

  const getSpinnerColor = useCallback(
    (type: IButtonTypes, disabled: boolean): string => {
      if (disabled) {
        return colors.IconWhite;
      }
      switch (type) {
        case IButtonTypes.secondary:
        case IButtonTypes.tertiary:
          return colors.IconBase;
        default:
          return colors.IconWhite;
      }
    },
    [],
  );

  switch (viewButton) {
    case IViewButton.leftIcon:
      return (
        <Button
          text={textButton}
          onPress={onPress}
          type={type}
          disabled={disabled}
          loading={loading}
          size={size}
          font={font}
          leftIcon={
            <SimpleIcon
              name={leftIcon}
              color={getSpinnerColor(type, disabled)}
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
          font={font}
          rightIcon={
            <SimpleIcon
              name={leftIcon}
              color={getSpinnerColor(type, disabled)}
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
          font={font}
          rightIcon={
            <SimpleIcon
              name={leftIcon}
              color={getSpinnerColor(type, disabled)}
              size={24}
            />
          }
          style={{minWidth: minWidth}}
        />
      );
    default:
      return (
        <Button
          text={textButton}
          onPress={onPress}
          type={type}
          disabled={disabled}
          loading={loading}
          size={size}
          font={font}
          style={{minWidth: minWidth}}
          count={count}
        />
      );
  }
};

export default ExampleButton;
