import {Easing} from 'react-native-reanimated';

export const getPosition = ({
  index,
  col,
  width,
  height,
}: {
  index: number;
  col: number;
  width: number;
  height: number;
}) => {
  'worklet';
  return {
    x: (index % col) * width,
    y: Math.floor(index / col) * height,
  };
};
export const getOrder = ({
  tx,
  ty,
  max,
  col,
  width,
  height,
}: {
  tx: number;
  ty: number;
  max: number;
  col: number;
  width: number;
  height: number;
}) => {
  'worklet';

  const x = Math.round(tx / width) * width;
  const y = Math.round(ty / height) * height;
  const row = Math.max(y, 0) / height;
  const columns = Math.max(x, 0) / width;
  return Math.min(row * col + columns, max);
};

export const animationConfig = {
  easing: Easing.inOut(Easing.ease),
  duration: 350,
};
