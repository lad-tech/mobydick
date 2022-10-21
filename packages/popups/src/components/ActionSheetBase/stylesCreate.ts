import {Platform, StyleSheet, ViewStyle} from 'react-native';
import {IThemeContext, rem} from '@npm/mobydick-styles';

import {IItemType} from './types';

const stylesCreate = (theme: IThemeContext, itemType?: IItemType) => {
  const {colors, spaces} = theme;

  const getItemStyle = (): ViewStyle => {
    switch (itemType) {
      case IItemType.firstItem:
        return {
          borderTopLeftRadius: spaces.Space12,
          borderTopRightRadius: spaces.Space12,
        };
      case IItemType.innerItem:
        return {
          borderTopWidth: 1,
          borderTopColor: colors.BgTertiary,
        };
      case IItemType.lastItem:
        return {
          borderBottomLeftRadius: spaces.Space12,
          borderBottomRightRadius: spaces.Space12,
          marginBottom: spaces.Space8,
          borderTopWidth: spaces.Space1,
          borderTopColor: colors.BgTertiary,
        };
      case IItemType.cancelItem:
        return {
          borderRadius: spaces.Space12,
          marginBottom: rem(30),
          justifyContent: 'center',
        };
      default:
        return {
          borderRadius: spaces.Space12,
          marginBottom: spaces.Space8,
        };
    }
  };
  return StyleSheet.create({
    containerStyle: {
      width: '100%',
      ...Platform.select({
        android: {
          flex: 1,
          justifyContent: 'flex-end',
        },
      }),
    },
    item: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spaces.Space20,
      marginHorizontal: spaces.Space8,
      minHeight: rem(50),

      ...getItemStyle(),
    },
    title: {
      flexDirection: 'column',
      justifyContent: 'center',
      paddingVertical: rem(15),
    },
    leftIcon: {
      paddingRight: rem(18),
    },
    leftIconView: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },

    checkIcon: {
      backgroundColor: colors.IconBase,
      borderRadius: theme.spaces.Space64,
      padding: theme.spaces.Space2,
    },
    label: {
      textAlign: 'center',
      paddingVertical: rem(15),
    },
    textSelected: {
      paddingVertical: rem(15),
    },
  });
};

export default stylesCreate;
