import {ViewStyle} from 'react-native';

import rem from '../../../styles/utils/rem';
import {createStyles} from '../../../styles';

import {IItemType} from './types';

const stylesCreate = createStyles(({spaces, colors}, itemType?: IItemType) => {
  const getItemStyle = (): ViewStyle => {
    switch (itemType) {
      case IItemType.firstItem:
        return {
          borderTopLeftRadius: spaces.Space12,
          borderTopRightRadius: spaces.Space12,
        };
      case IItemType.innerItem:
        return {
          borderTopWidth: spaces.Space1,
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
          justifyContent: 'center',
        };
    }
  };

  return {
    overlayStyle: {
      justifyContent: 'flex-end',
    },
    containerStyle: {
      width: '100%',
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
    leftIcon: {
      paddingRight: spaces.Space12,
    },
    leftIconView: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
    textSelected: {
      paddingVertical: rem(15),
    },
  };
});

export default stylesCreate;
