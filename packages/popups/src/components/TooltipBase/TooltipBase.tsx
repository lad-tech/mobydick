import React, {FC} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';
import {useStyles} from '@npm/mobydick-styles';

import {PopupBase} from '../PopupBase';
import {IPopup} from '../../types';

import stylesCreate from './stylesCreate';
import Title from './Title';
import DescriptionText from './DescriptionText';
import Arrow from './Arrow';
import {IPlacement, IPosition} from './types';

const TooltipBase: FC<
  Omit<IPopup, 'Content'> & {
    onClose: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    position: IPosition;
    placement: IPlacement;
    pageY: number;
  }
> & {
  Title: typeof Title;
  DescriptionText: typeof DescriptionText;
  Arrow: typeof Arrow;
} = props => {
  const {containerStyle, children, onClose, overlayStyle, position, placement} =
    props;
  const [styles] = useStyles(stylesCreate);
  console.log('props.pageY.y', props.pageY);
  return (
    <PopupBase onClose={onClose} overlayStyle={overlayStyle}>
      <Animated.View
        style={[
          styles.container,
          containerStyle,
          position === IPosition.top && {
            top: props.pageY,
          },
          position === IPosition.bottom && {
            position: 'absolute',
            bottom: props.pageY,
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
