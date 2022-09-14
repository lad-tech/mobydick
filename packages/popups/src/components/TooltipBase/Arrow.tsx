import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {View} from '@npm/mobydick-core';
import {ColorValue, ViewStyle} from 'react-native';

import stylesCreate from './stylesCreate';
import {IArrowViewPopup, IPlacement, IPosition} from './types';

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

const positionArrow = (
  position: IPosition,
  colorTooltip: ColorValue,
): ViewStyle => {
  switch (position) {
    case IPosition.top:
      return {
        top: -7,
        borderBottomWidth: 8,
        borderRightWidth: 10,
        borderTopWidth: 0,
        borderLeftWidth: 10,
        borderBottomColor: colorTooltip,
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
      };
    case IPosition.bottom:
      return {
        bottom: -7,
        borderTopWidth: 8,
        borderRightWidth: 10,
        borderBottomWidth: 0,
        borderLeftWidth: 10,
        borderTopColor: colorTooltip,
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
      };
  }
};

const Arrow: FC<IArrowViewPopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {arrowViewStyles, placement, position, colorTooltip} = props;

  return (
    <View
      style={[
        styles.arrow,
        arrowViewStyles,
        placementArrow(placement),
        positionArrow(position, colorTooltip),
      ]}
    />
  );
};

export default Arrow;
