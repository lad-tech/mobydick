import {FC, forwardRef, PropsWithChildren} from 'react';

import {getCounterType, getDefaultFont, getSpinnerColor} from '../../utils';
import {ITouchableOpacity, TouchableOpacity} from '../../../basic';
import useStyles from '../../../styles/hooks/useStyles';
import {TypographyLegacy} from '../../../typography';
import {Spinner} from '../../../progress/components/Spinner';
import {ISizeSpinner} from '../../../progress/components/Spinner/types';
import {ICounterSize} from '../../../other';
import Counter from '../../../other/components/Badge/Counter/Counter';

import {IButtonProps, IButtonSize, IButtonTypes, IStateBtn} from './types';
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
    textProps,
    state = disabled ? IStateBtn.disabled : IStateBtn.default,
    ...otherProps
  } = props;
  const [styles, theme] = useStyles(
    stylesCreate,
    type,
    size,
    Boolean(leftIcon),
    Boolean(rightIcon),
    Boolean(text),
    state,
  );

  const defaultFont = getDefaultFont(size, type, state);

  const counterSize =
    size === IButtonSize.small ? ICounterSize.small : ICounterSize.medium;

  const Container: FC<PropsWithChildren<unknown>> = ({children}) => (
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

  if (loading || type === IButtonTypes.loading) {
    return (
      <Container>
        <Spinner
          fill={getSpinnerColor({type, state, theme})}
          size={size === IButtonSize.small ? ISizeSpinner.XXS : ISizeSpinner.XS}
        />
      </Container>
    );
  }

  return (
    <Container>
      {leftIcon}
      {Boolean(text) && (
        <TypographyLegacy
          {...textProps}
          style={[styles.text, textStyle]}
          font={font || defaultFont}>
          {text}
        </TypographyLegacy>
      )}
      {rightIcon}
      {count ? (
        <Counter
          count={count}
          size={counterSize}
          type={getCounterType({type, state})}
          style={styles.counter}
        />
      ) : null}
    </Container>
  );
});
export default Button;
