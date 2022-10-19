import React, {FC, RefObject, useMemo, useState} from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useStyles} from '@npm/mobydick-styles';
import {ITouchableOpacity} from '@npm/mobydick-core';

import {PopupBase} from '../PopupBase';
import {IPopup, IPosition} from '../../types';

import stylesCreate from './stylesCreate';
import Title from './Title';
import DescriptionText from './DescriptionText';
import Arrow from './Arrow';
import {IPlacement} from './types';

const {height} = Dimensions.get('window');
const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

const TooltipBase: FC<
  Omit<IPopup, 'Content'> & {
    onClose: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    position: IPosition;
    placement: IPlacement;
    refCurrent: RefObject<ITouchableOpacity>;
  }
> & {
  Title: typeof Title;
  DescriptionText: typeof DescriptionText;
  Arrow: typeof Arrow;
} = props => {
  const {
    containerStyle,
    children,
    onClose,
    overlayStyle,
    position,
    placement,
    refCurrent,
  } = props;
  const [styles] = useStyles(stylesCreate);

  const [positionValue, setPositionValue] = useState(0);

  useMemo(() => {
    refCurrent?.current?.measure((_x, _y, _width, _height, _pageX, pageY) => {
      if (pageY) {
        position === IPosition.top
          ? setPositionValue(pageY + _height)
          : Platform.OS === 'android' && STATUS_BAR_HEIGHT
          ? setPositionValue(height - pageY - STATUS_BAR_HEIGHT)
          : setPositionValue(height - pageY);
      }
    });
  }, []);

  if (positionValue === 0) {
    return null;
  }

  return (
    <PopupBase onClose={onClose} overlayStyle={overlayStyle}>
      <Animated.View
        style={[
          styles.container,
          containerStyle,
          position === IPosition.top && {
            top: positionValue,
          },
          position === IPosition.bottom && {
            bottom: positionValue,
          },
          placement === IPlacement.start && {
            left: 0,
          },
          placement === IPlacement.end && {
            right: 0,
          },
        ]}>
        {children}
      </Animated.View>
    </PopupBase>
  );
};

TooltipBase.Title = Title;
TooltipBase.DescriptionText = DescriptionText;
TooltipBase.Arrow = Arrow;
export default TooltipBase;
