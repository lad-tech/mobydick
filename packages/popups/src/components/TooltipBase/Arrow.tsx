import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {View} from '@npm/mobydick-core';
import {ViewStyle} from 'react-native';

import stylesCreate from './stylesCreate';
import {IArrowViewPopup, IPlacement, IPosition} from './types';

const Arrow: FC<IArrowViewPopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {arrowViewStyles, placement, position, colorTooltip} = props;

  const placementArrow = (placement: IPlacement): ViewStyle => {
    switch (placement) {
      case IPlacement.start:
        return {
          left: 10,
        };
      case IPlacement.center:
        return {
          alignSelf: 'center',
        };
      case IPlacement.end:
        return {
          right: 10,
        };
    }
  };

  const positionArrow = (position: IPosition): ViewStyle => {
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

  return (
    <View
      style={[
        styles.arrow,
        arrowViewStyles,
        placementArrow(placement),
        positionArrow(position),
      ]}
    />
  );
};

export default Arrow;
