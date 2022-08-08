import React, {FC} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';
import {useStyles} from '@npm/mobydick-styles';

import {PopupBase} from '../PopupBase';

import stylesCreate from './stylesCreate';
import Title from './Title';
import DescriptionText from './DescriptionText';
import {IPlacement, IPosition, ITooltip} from './types';
import Arrow from './Arrow';

const TooltipBase: FC<
  Omit<ITooltip, 'Content'> & {
    onClose: () => void;
    containerStyle?: StyleProp<ViewStyle>;
  }
> & {
  Title: typeof Title;
  DescriptionText: typeof DescriptionText;
  Arrow: typeof Arrow;
} = props => {
  const {position, styleContainer, children, isVisible, placement, onClose} =
    props;
  const [styles] = useStyles(stylesCreate);

  if (!isVisible) return null;
  //сейчас мимоклик работает только возле кнопки
  return (
    <PopupBase onClose={onClose}>
      <Animated.View
        style={[
          styles.container,
          styleContainer,
          position === IPosition.top && {
            position: 'absolute',
            top: '100%',
          },
          position === IPosition.bottom && {
            position: 'absolute',
            bottom: '100%',
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
