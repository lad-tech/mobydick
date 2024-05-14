import {FC} from 'react';
import {DashPathEffect, Line, vec} from '@shopify/react-native-skia';
import {SharedValue, useDerivedValue} from 'react-native-reanimated';

import {chartPaddingVertical} from '../utils';

interface IXLine {
  x: SharedValue<number>;
  size: SharedValue<{width: number; height: number}>;
}

const XLine: FC<IXLine> = ({x, size}) => {
  const line1 = useDerivedValue(() => vec(x.value, 0));
  const line2 = useDerivedValue(() =>
    vec(x.value, size.value.height - chartPaddingVertical / 2),
  );

  return (
    <Line p1={line1} p2={line2} color={'#c51414'} strokeWidth={2}>
      <DashPathEffect intervals={[4, 4]} />
    </Line>
  );
};

export default XLine;
