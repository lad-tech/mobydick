import React, {FC, RefObject, useEffect, useState} from 'react';
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
  const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
  const [posTop, setPosTop] = useState(0);
  const [posBottom, setPosBottom] = useState(0);

  useEffect(() => {
    if (refCurrent.current) {
      refCurrent.current.measure((_x, _y, _width, _height, _pageX, pageY) => {
        if (pageY && _height) {
          setPosTop(pageY + _height);
          Platform.OS === 'android' && STATUS_BAR_HEIGHT
            ? setPosBottom(height - pageY - STATUS_BAR_HEIGHT)
            : setPosBottom(height - pageY);
        }
      });
    }
  }, []);

  if (!posTop && !posBottom) {
    return null;
  }

  return (
    <PopupBase onClose={onClose} overlayStyle={overlayStyle}>
      <Animated.View
        style={[
          styles.container,
          containerStyle,
          position === IPosition.top && {
            top: posTop,
          },
          position === IPosition.bottom && {
            bottom: posBottom,
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
