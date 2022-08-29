import {StyleSheet, ViewStyle} from 'react-native';
import {IUseStylesTheme, rem} from '@npm/mobydick-styles';

const stylesCreate = (
  theme: IUseStylesTheme,
  selected?: boolean,
  leftIcon?: boolean,
) => {
  const {colors, spaces} = theme;

  const flexStyle = (): ViewStyle => {
    if (leftIcon || selected) {
      return {
        justifyContent: selected ? 'space-between' : 'flex-start',
        flexDirection: 'row',
      };
    }
    return {justifyContent: 'center'};
  };

  return StyleSheet.create({
    containerStyle: {
      width: '100%',
    },
    item: {
      backgroundColor: colors.BgSecondary,
      alignItems: 'center',
      paddingVertical: rem(15),
      paddingHorizontal: rem(20),
      marginHorizontal: spaces.Space8,

      ...flexStyle(),
    },
    title: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    leftIcon: {
      paddingRight: rem(18),
    },
    leftIconView: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
    firstItem: {
      borderTopLeftRadius: spaces.Space12,
      borderTopRightRadius: spaces.Space12,
    },
    innerItem: {
      borderTopWidth: 1,
      borderTopColor: colors.BorderSoft,
    },
    lastItem: {
      borderBottomLeftRadius: spaces.Space12,
      borderBottomRightRadius: spaces.Space12,
      marginBottom: spaces.Space8,
      borderTopWidth: 1,
      borderTopColor: colors.BorderSoft,
    },
    cancelItem: {
      borderRadius: spaces.Space12,
      marginBottom: rem(30),
    },
    checkIcon: {
      backgroundColor: colors.IconBase,
      borderRadius: theme.spaces.Space64,
      padding: theme.spaces.Space4,
    },
    label: {
      textAlign: 'center',
    },
    textSelected: {
      paddingVertical: selected ? 4 : 0,
    },
  });
};

export default stylesCreate;
