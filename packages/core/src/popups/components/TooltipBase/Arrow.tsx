import {FC} from 'react';
import {ViewStyle} from 'react-native';

import useStyles from '../../../styles/theme/hooks/useStyles';
import View from '../../../basic/components/View/View';

import stylesCreate from './stylesCreate';
import {IArrowViewPopup, IPlacement} from './types';

const placementArrow = (placement: IPlacement): ViewStyle => {
  switch (placement) {
    case IPlacement.start:
      return {
        left: 10,
      };
    case IPlacement.end:
      return {
        right: 10,
      };
    case IPlacement.center:
    default:
      return {
        alignSelf: 'center',
      };
  }
};

const Arrow: FC<IArrowViewPopup> = props => {
  const {arrowViewStyles, placement, position} = props;
  const [styles] = useStyles(stylesCreate, position);
  return (
    <View
      style={[
        styles.arrow,
        arrowViewStyles,
        styles.positionStyle,
        placementArrow(placement),
      ]}
    />
  );
};

export default Arrow;
