import {IPosition} from '../../types';
import {createStyles} from '../../../styles';

const stylesCreate = createStyles(({colors, spaces}, placement?: IPosition) => {
  const placementStyle = () => {
    switch (placement) {
      case IPosition.top:
        return {
          top: 20,
        };
      case IPosition.bottom:
      default:
        return {
          bottom: 10,
        };
    }
  };

  return {
    overlayStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      width: '100%',
      flex: 1,
      alignItems: 'center',
      ...placementStyle(),
    },
    container: {
      backgroundColor: colors.BgContrast,
      borderRadius: spaces.Space12,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: spaces.Space20,
      paddingVertical: spaces.Space16,
      margin: spaces.Space20,
    },
    title: {
      flex: 1,
      paddingRight: spaces.Space8,
    },
  };
});

export default stylesCreate;
