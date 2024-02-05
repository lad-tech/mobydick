import {StyleSheet, ViewStyle} from 'react-native';

import rem from '../../../styles/utils/rem';
import {IThemeContext} from '../../../styles/types';

import {IButtonSize, IButtonTypes} from './types';

interface IButtonContents {
  theme: IThemeContext;
  size: IButtonSize;
  leftIcon: boolean;
  rightIcon: boolean;
  text: boolean;
}

const getButtonHorizontalPadding = ({
  theme,
  leftIcon,
  rightIcon,
  text,
}: Omit<IButtonContents, 'size'>) => {
  if (!text) {
    return theme.spaces.Space6;
  }
  if (leftIcon || rightIcon) {
    return rem(14);
  }
  return theme.spaces.Space12;
};

const getButtonStyles = ({
  theme,
  size,
  leftIcon,
  rightIcon,
  text,
}: IButtonContents): ViewStyle => {
  switch (size) {
    case IButtonSize.small:
      return {
        minHeight: theme.spaces.Space32,
        paddingVertical: theme.spaces.Space6,
        paddingHorizontal: getButtonHorizontalPadding({
          theme,
          leftIcon,
          rightIcon,
          text,
        }),
      };
    case IButtonSize.large:
      return {
        minHeight: theme.spaces.Space48,
        paddingVertical: theme.spaces.Space12,
        paddingHorizontal: text ? rem(26) : theme.spaces.Space12,
      };
    case IButtonSize.fixed:
      return {
        alignSelf: 'stretch',
        minHeight: theme.spaces.Space48,
      };
    default:
      return {};
  }
};

const primaryStyle = ({
  theme,
  size,
  leftIcon,
  rightIcon,
  text,
}: IButtonContents) => {
  const {colors} = theme;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.CtaBtnPrimary,
      borderRadius: theme.spaces.Space12,

      ...getButtonStyles({theme, size, leftIcon, rightIcon, text}),
    },

    text: {
      paddingHorizontal:
        size === IButtonSize.small ? theme.spaces.Space4 : theme.spaces.Space6,
    },
    counter: {
      marginLeft: theme.spaces.Space2,
    },
  });
};

const secondaryStyle = ({
  theme,
  size,
  leftIcon,
  rightIcon,
  text,
}: IButtonContents) => {
  const defaultStyles = primaryStyle({theme, size, leftIcon, rightIcon, text});
  const {
    colors: {CtaBtnSecondary},
  } = theme;

  defaultStyles.container.backgroundColor = CtaBtnSecondary;

  return defaultStyles;
};

const tertiaryStyle = ({
  theme,
  size,
  leftIcon,
  rightIcon,
  text,
}: IButtonContents) => {
  const defaultStyles = primaryStyle({theme, size, leftIcon, rightIcon, text});

  defaultStyles.container.backgroundColor = 'transparent';

  return defaultStyles;
};

const disabledStyle = ({
  theme,
  size,
  leftIcon,
  rightIcon,
  text,
}: IButtonContents) => {
  const defaultStyles = primaryStyle({theme, size, leftIcon, rightIcon, text});
  const {
    colors: {CtaBtnMuted},
  } = theme;

  defaultStyles.container.backgroundColor = CtaBtnMuted;

  return defaultStyles;
};

const destructiveStyle = ({
  theme,
  size,
  leftIcon,
  rightIcon,
  text,
}: IButtonContents) => {
  const defaultStyles = primaryStyle({theme, size, leftIcon, rightIcon, text});
  const {
    colors: {CtaBtnDestructive},
  } = theme;

  defaultStyles.container.backgroundColor = CtaBtnDestructive;

  return defaultStyles;
};

const stylesCreate = (
  theme: IThemeContext,
  type: IButtonTypes,
  size: IButtonSize,
  leftIcon: boolean,
  rightIcon: boolean,
  text: boolean,
) => {
  switch (type) {
    case IButtonTypes.secondary:
      return secondaryStyle({theme, size, leftIcon, rightIcon, text});
    case IButtonTypes.tertiary:
      return tertiaryStyle({theme, size, leftIcon, rightIcon, text});
    case IButtonTypes.disabled:
      return disabledStyle({theme, size, leftIcon, rightIcon, text});
    case IButtonTypes.destructive:
      return destructiveStyle({theme, size, leftIcon, rightIcon, text});
    case IButtonTypes.primary:
    default:
      return primaryStyle({theme, size, leftIcon, rightIcon, text});
  }
};
export default stylesCreate;
