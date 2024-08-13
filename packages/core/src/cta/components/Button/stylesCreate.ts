import {ViewStyle} from 'react-native';

import {IThemeContext} from '../../../styles/types';
import {createStyles} from '../../../styles';
import px from '../../../styles/utils/px';

import {IButtonSize, IButtonTypes, IStateBtn} from './types';

interface IButtonContents {
  theme: IThemeContext;
  size: IButtonSize;
  leftIcon: boolean;
  rightIcon: boolean;
  text: boolean;
  state: IStateBtn;
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
    return px(14);
  }
  return theme.spaces.Space12;
};

const getButtonStyles = ({
  theme,
  size,
  leftIcon,
  rightIcon,
  text,
  state,
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
          state,
        }),
      };
    case IButtonSize.large:
      return {
        minHeight: theme.spaces.Space48,
        paddingVertical: theme.spaces.Space12,
        paddingHorizontal: text ? px(26) : theme.spaces.Space12,
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

function getBgColorPrimaryType({
  theme,
  state,
}: {
  theme: IThemeContext;
  state: IStateBtn;
}) {
  switch (state) {
    case IStateBtn.danger:
      return theme.colors.CtaBtnDestructive;
    case IStateBtn.disabled:
      return theme.colors.CtaBtnMuted;
    case IStateBtn.default:
    default:
      return theme.colors.CtaBtnPrimary;
  }
}

const primaryStyle = ({
  theme,
  size,
  leftIcon,
  rightIcon,
  text,
  state,
}: IButtonContents) =>
  createStyles(() => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getBgColorPrimaryType({theme, state}),
      borderRadius: theme.spaces.Space12,

      ...getButtonStyles({theme, size, leftIcon, rightIcon, text, state}),
    },

    text: {
      paddingHorizontal:
        size === IButtonSize.small ? theme.spaces.Space4 : theme.spaces.Space6,
    },
    counter: {
      marginLeft: theme.spaces.Space2,
    },
  }))(theme);

const secondaryStyle = ({
  theme,
  size,
  leftIcon,
  rightIcon,
  text,
  state,
}: IButtonContents) => {
  const defaultStyles = primaryStyle({
    theme,
    size,
    leftIcon,
    rightIcon,
    text,
    state,
  });
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
  state,
}: IButtonContents) => {
  const defaultStyles = primaryStyle({
    theme,
    size,
    leftIcon,
    rightIcon,
    text,
    state,
  });

  defaultStyles.container.backgroundColor = 'transparent';

  return defaultStyles;
};

const disabledStyle = ({
  theme,
  size,
  leftIcon,
  rightIcon,
  text,
  state,
}: IButtonContents) => {
  const defaultStyles = primaryStyle({
    theme,
    size,
    leftIcon,
    rightIcon,
    text,
    state,
  });
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
  state,
}: IButtonContents) => {
  const defaultStyles = primaryStyle({
    theme,
    size,
    leftIcon,
    rightIcon,
    text,
    state,
  });
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
  state: IStateBtn,
) => {
  switch (type) {
    case IButtonTypes.secondary:
      return secondaryStyle({theme, size, leftIcon, rightIcon, text, state});
    case IButtonTypes.tertiary:
      return tertiaryStyle({theme, size, leftIcon, rightIcon, text, state});
    case IButtonTypes.disabled:
      return disabledStyle({theme, size, leftIcon, rightIcon, text, state});
    case IButtonTypes.destructive:
      return destructiveStyle({theme, size, leftIcon, rightIcon, text, state});
    case IButtonTypes.primary:
    default:
      return primaryStyle({theme, size, leftIcon, rightIcon, text, state});
  }
};
export default stylesCreate;
