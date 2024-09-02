import {FC} from 'react';

import View from '../../../../basic/components/View/View';
import useStyles from '../../../../styles/hooks/useStyles';
import {Typography} from '../../../../typography';

import stylesCreate from './stylesCreate';
import {ICounterProps, ICounterSize, ICounterTypes} from './types';
import {getFont} from './getFont';

const Counter: FC<ICounterProps> = ({
  count,
  style,
  textStyle,
  font,
  size = ICounterSize.medium,
  type = ICounterTypes.accent,
  maxLength = 2,
}) => {
  const [styles] = useStyles(stylesCreate, size, type);

  if (!count) {
    return null;
  }

  const lastNumber = `${'9'.repeat(maxLength)}+`;

  const text =
    count.toString().length > maxLength ? lastNumber : count.toString();

  return (
    <View style={[styles.counter, style]}>
      <Typography
        style={[styles.text, textStyle]}
        font={font ?? getFont(type, size)}>
        {text}
      </Typography>
    </View>
  );
};

export default Counter;
