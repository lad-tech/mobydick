import React, {FC} from 'react';
import {Text, View} from '@npm/mobydick-core';
import {useFont} from '@npm/mobydick-typography';
import {useStyles} from '@npm/mobydick-styles';
import {ViewStyle} from 'react-native';

import stylesCreate from './stylesCreate';
import {ICounterSize, ICounterTypes} from './types';

interface IProps {
  type?: ICounterTypes;
  count?: number;
  style?: ViewStyle | ViewStyle[];
  size?: ICounterSize;
}

const Counter: FC<IProps> = ({
  count = 0,
  style,
  size = ICounterSize.medium,
  type,
}) => {
  const [styles] = useStyles(stylesCreate, size, type);
  const {fontStyle} = useFont(
    size === ICounterSize.medium ? 'SemiBold-White-M' : 'SemiBold-White-XXS',
  );

  if (!count) {
    return null;
  }

  const text = count > 99 ? '99+' : count.toString();

  return (
    <View style={[styles.badge, style]}>
      <Text style={[fontStyle, styles.text]}>{text}</Text>
    </View>
  );
};

export default Counter;
