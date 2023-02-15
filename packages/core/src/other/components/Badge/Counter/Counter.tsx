import React, {FC} from 'react';
import {ViewStyle} from 'react-native';

import View from '../../../../basic/components/View/View';
import useStyles from '../../../../styles/theme/hooks/useStyles';
import {Typography} from '../../../../typography';

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
  type = ICounterTypes.tertiary,
  maxLength = 2,
}) => {
  const [styles] = useStyles(stylesCreate, size, type);
  const font =
    size === ICounterSize.medium ? 'SemiBold-White-M' : 'SemiBold-White-XXS';

  if (!count) {
    return null;
  }

  const lastNumber = `${'9'.repeat(maxLength)}+`;

  const text =
    count.toString().length > maxLength ? lastNumber : count.toString();

  return (
    <View style={[styles.counter, style]}>
      <Typography style={styles.text} font={font}>
        {text}
      </Typography>
    </View>
  );
};

export default Counter;
