import {FC, useEffect, useMemo, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {PopupBase} from '../PopupBase';
import {IPosition} from '../../types';
import useStyles from '../../../styles/hooks/useStyles';

import stylesCreate from './stylesCreate';
import TooltipTitle from './TooltipTitle';
import DescriptionText from './DescriptionText';
import Arrow from './Arrow';
import LeftButton from './LeftButton';
import {IPlacement, ITooltipBaseProps} from './types';

const TooltipBase: FC<ITooltipBaseProps> & {
  Title: typeof TooltipTitle;
  DescriptionText: typeof DescriptionText;
  Arrow: typeof Arrow;
  LeftButton: typeof LeftButton;
} = props => {
  const {
    containerStyle,
    children,
    onClose,
    overlayStyle,
    position,
    placement,
    refCurrent,
    timeShow,
  } = props;
  const [styles] = useStyles(stylesCreate);
  const {width, height} = useSafeAreaFrame();

  const [positionValueY, setPositionValueY] = useState(0);
  const [positionValueX, setPositionValueX] = useState(0);

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeShow) {
      timeout.current = setTimeout(() => {
        onClose();
      }, timeShow);
    }

    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, []);

  useMemo(() => {
    refCurrent?.current?.measure((_x, _y, _width, _height, _pageX, pageY) => {
      if (pageY) {
        const androidValue = height - pageY;

        position === IPosition.top
          ? setPositionValueY(pageY + _height)
          : setPositionValueY(androidValue);

        placement === IPlacement.start
          ? setPositionValueX(_pageX)
          : setPositionValueX(width - _pageX - _width);
      }
    });
  }, []);

  if (positionValueY === 0) {
    return null;
  }

  return (
    <PopupBase
      onClose={onClose}
      overlayStyle={[styles.overlayStyle, overlayStyle]}>
      <Animated.View
        style={[
          styles.container,
          containerStyle,
          position === IPosition.top && {
            top: positionValueY,
          },
          position === IPosition.bottom && {
            bottom: positionValueY,
          },
          placement === IPlacement.start && {
            left: positionValueX,
          },
          placement === IPlacement.end && {
            right: positionValueX,
          },
        ]}>
        {children}
      </Animated.View>
    </PopupBase>
  );
};

TooltipBase.Title = TooltipTitle;
TooltipBase.DescriptionText = DescriptionText;
TooltipBase.Arrow = Arrow;
TooltipBase.LeftButton = LeftButton;
export default TooltipBase;
