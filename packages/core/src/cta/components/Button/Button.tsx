import React, {FC, forwardRef} from 'react';

import {getCounterType} from '../../utils';
import {ITouchableOpacity, TouchableOpacity} from '../../../basic';
import useStyles from '../../../styles/theme/hooks/useStyles';
import {Typography} from '../../../typography';
import {Spinner} from '../../../progress/components/Spinner';
import {ISizeSpinner} from '../../../progress/components/Spinner/types';
import {ICounterSize} from '../../../other/components/Counter/types';
import Counter from '../../../other/components/Counter/Counter';

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
    count,
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

  const defaultFont =
    size === IButtonSize.small ? 'SemiBold-White-XS' : 'SemiBold-White-L';

  const counterSize =
    size === IButtonSize.small ? ICounterSize.small : ICounterSize.medium;

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

  const getSpinnerColor = (): string => {
    if (disabled) {
      return theme.colors.IconWhite;
    }
    switch (type) {
      case IButtonTypes.secondary:
      case IButtonTypes.tertiary:
        return theme.colors.IconBase;
      default:
        return theme.colors.IconWhite;
    }
  };

  if (loading || type === IButtonTypes.loading) {
    return (
      <Container>
        <Spinner
          fill={getSpinnerColor()}
          size={size === IButtonSize.small ? ISizeSpinner.XXS : ISizeSpinner.XS}
        />
      </Container>
    );
  }

  return (
    <Container>
      {leftIcon}
      {Boolean(text) && (
        <Typography style={[styles.text, textStyle]} font={font || defaultFont}>
          {text}
        </Typography>
      )}
      {rightIcon}
      {count ? (
        <Counter
          count={count}
          size={counterSize}
          type={getCounterType(type)}
          style={styles.counter}
        />
      ) : null}
    </Container>
  );
});
export default Button;
