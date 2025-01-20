import {IPosition} from '../../types';
import {createStyles} from '../../../styles';

const stylesCreate = createStyles(({spaces, colors}, position?: IPosition) => {
  const positionStyle = () => {
    switch (position) {
      case IPosition.top:
        return {
          top: -spaces.Space8,
          borderBottomWidth: spaces.Space8,
          borderRightWidth: spaces.Space8,
          borderTopWidth: 0,
          borderLeftWidth: spaces.Space8,
          borderBottomColor: colors.BgInverse,
          borderRightColor: 'transparent',
          borderTopColor: 'transparent',
          borderLeftColor: 'transparent',
        };
      case IPosition.bottom:
      default:
        return {
          bottom: -spaces.Space8,
          borderTopWidth: spaces.Space8,
          borderRightWidth: spaces.Space8,
          borderBottomWidth: 0,
          borderLeftWidth: spaces.Space8,
          borderTopColor: colors.BgInverse,
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',
          borderLeftColor: 'transparent',
        };
    }
  };
  return {
    container: {
      backgroundColor: colors.BgInverse,
      paddingVertical: spaces.Space8,
      paddingHorizontal: spaces.Space16,
      borderRadius: spaces.Space8,
      justifyContent: 'center',
      alignItems: 'flex-start',
      zIndex: 1,
      marginVertical: spaces.Space8,
      position: 'absolute',
    },
    overlayStyle: {
      backgroundColor: 'transparent',
    },
    arrow: {
      position: 'absolute',
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
    },
    title: {
      zIndex: 1,
    },
    descriptionText: {
      zIndex: 1,
      paddingBottom: spaces.Space8,
    },
    positionStyle: {
      ...positionStyle(),
    },
  };
});

export default stylesCreate;
