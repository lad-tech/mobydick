import React, {FC} from 'react';
import {Animated} from 'react-native';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import Title from './Title';
import DescriptionText from './DescriptionText';
import {IPosition, ITooltip} from './types';
import Arrow from './Arrow';

const TooltipBase: FC<ITooltip> & {
  Title: typeof Title;
  DescriptionText: typeof DescriptionText;
  Arrow: typeof Arrow;
} = props => {
  const {position, styleContainer, children, isVisible} = props;
  const [styles] = useStyles(stylesCreate);

  if (!isVisible) return null;

  return (
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
      ]}>
      {children}
    </Animated.View>
  );
};

TooltipBase.Title = Title;
TooltipBase.DescriptionText = DescriptionText;
TooltipBase.Arrow = Arrow;
export default TooltipBase;
