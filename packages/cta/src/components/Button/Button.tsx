import {ITouchableOpacity, TouchableOpacity} from '@npm/mobydick-core';
import React, {FC, forwardRef} from 'react';
import {ISizeSpinner, Spinner} from '@npm/mobydick-progress';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';

import {IButtonProps, IButtonSize, IButtonTypes} from './types';
import stylesCreate from './stylesCreate';

const Button = forwardRef<ITouchableOpacity, IButtonProps>((props, ref) => {
  const {
    style,
    text,
    leftIcon,
    rightIcon,
    size = IButtonSize.fixed,
    type = IButtonTypes.primary,
    loading = false,
    disabled = false,
    textStyle,
    font,
    ...otherProps
  } = props;
  const [styles, theme] = useStyles(
    stylesCreate,
    disabled ? IButtonTypes.disabled : type,
    size,
    Boolean(leftIcon),
    Boolean(rightIcon),
    Boolean(text),
  );

  const fontCorrection = font
    ? font
    : size === IButtonSize.small
    ? 'SemiBold-White-XS'
    : 'SemiBold-White-L';

  const Container: FC = ({children}) => (
    <TouchableOpacity
      ref={ref}
      style={[styles.container, style]}
      disabled={
        loading ||
        disabled ||
        type === IButtonTypes.disabled ||
        type === IButtonTypes.loading
      }
      {...otherProps}>
      {children}
    </TouchableOpacity>
  );

  if (loading || type === IButtonTypes.loading)
    return (
      <Container>
        <Spinner
          fill={theme.colors.IconWhite}
          size={size === IButtonSize.small ? ISizeSpinner.XXS : ISizeSpinner.XS}
        />
      </Container>
    );

  return (
    <Container>
      {leftIcon}
      {Boolean(text) && (
        <Typography style={[styles.text, textStyle]} font={fontCorrection}>
          {text}
        </Typography>
      )}
      {rightIcon}
    </Container>
  );
});
export default Button;
