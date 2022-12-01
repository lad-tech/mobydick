import React, {FC} from 'react';
import {Text, View} from '@npm/mobydick-core';
import {useFont} from '@npm/mobydick-typography';
import {useStyles} from '@npm/mobydick-styles';
import {ViewStyle} from 'react-native';

import stylesCreate from './stylesCreate';
import {ICounterSize, ICounterTypes} from './types';

interface IProps {
  count: number;
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
    return null;
  }

  const lastNumber = `${'9'.repeat(maxLength)}+`;

  const text =
    count.toString().length > maxLength ? lastNumber : count.toString();

  return (
    <View style={[styles.badge, style]}>
      <Text style={[fontStyle, styles.text]}>{text}</Text>
    </View>
  );
};

export default Counter;
