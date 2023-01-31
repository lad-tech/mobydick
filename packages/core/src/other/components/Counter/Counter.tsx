import React, {FC} from 'react';
import {ViewStyle} from 'react-native';

import View from '../../../basic/components/View/View';
import Text from '../../../basic/components/Text/Text';
import useStyles from '../../../styles/theme/hooks/useStyles';
import {useFont} from '../../../typography';

import stylesCreate from './stylesCreate';
import {ICounterSize, ICounterTypes} from './types';

interface IProps {
  count?: number;
  type?: ICounterTypes;
  style?: ViewStyle | ViewStyle[];
  size?: ICounterSize;
  maxLength?: number;
}

const Counter: FC<IProps> = ({
  count,
  style,
  size = ICounterSize.medium,
  type,
  maxLength = 2,
}) => {
  const [styles] = useStyles(stylesCreate, size, type);
  const {fontStyle} = useFont(
    size === ICounterSize.medium ? 'SemiBold-White-M' : 'SemiBold-White-XXS',
  );

  if (!count) {
    return <View style={[styles.indicator, style]} />;
  }

  const lastNumber = `${'9'.repeat(maxLength)}+`;

  const text =
    count.toString().length > maxLength ? lastNumber : count.toString();

  return (
    <View style={[styles.counter, style]}>
      <Text style={[fontStyle, styles.text]}>{text}</Text>
    </View>
  );
};

export default Counter;
