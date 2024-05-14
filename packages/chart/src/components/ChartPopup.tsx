import {FC, PropsWithChildren} from 'react';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';
import {ViewStyle} from 'react-native';

interface IChartPopup {
  x: SharedValue<number>;
  y: SharedValue<number>;
  style?: ViewStyle;
}

const ChartPopup: FC<PropsWithChildren<IChartPopup>> = ({
  x,
  y,
  style,
  children,
}) => {
  const defaultPosition = {x: 0, y: 0};
  const popupStyle = useAnimatedStyle<ViewStyle>(
    () => ({
      ...(style ?? defaultPosition),
      position: 'absolute',
      transform: [{translateX: x.value}, {translateY: y.value}],
      display: x.value < 0 ? 'none' : 'flex',
    }),
    [x.value, y.value],
  );

  return <Animated.View style={popupStyle}>{children}</Animated.View>;
};

export default ChartPopup;
