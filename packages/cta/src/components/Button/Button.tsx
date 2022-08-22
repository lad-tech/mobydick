import {TouchableOpacity} from '@npm/mobydick-core';
import React, {FC} from 'react';
import {ISizeSpinner, Spinner} from '@npm/mobydick-progress';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';

import {ButtonProps, ISize, ITypes} from './types';
import stylesCreate from './stylesCreate';

const Button: FC<ButtonProps> = props => {
  const {
    style,
    text,
    leftIcon,
    rightIcon,
    size = ISize.fixed,
    type = ITypes.primary,
    loading = false,
    disabled = false,
    textStyle,
    font,
    ...otherProps
  } = props;
  const [styles, theme] = useStyles(
    stylesCreate,
    disabled ? ITypes.disabled : type,
    size,
    Boolean(leftIcon),
    Boolean(rightIcon),
    Boolean(text),
  );

  const fontCorrection = font
    ? font
    : size === ISize.small
    ? 'SemiBold-White-XS'
    : 'SemiBold-White-L';

  const Container: FC = ({children}) => (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={
        loading ||
        disabled ||
        type === ITypes.disabled ||
        type === ITypes.loading
      }
      {...otherProps}>
      {children}
    </TouchableOpacity>
  );

  if (loading || type === ITypes.loading)
    return (
      <Container>
        <Spinner
          fill={theme.colors.IconWhite}
          size={size === ISize.small ? ISizeSpinner.XXS : ISizeSpinner.XS}
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
};
export default Button;
