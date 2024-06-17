import {FC} from 'react';

import View from '../../../../basic/components/View/View';
import useStyles from '../../../../styles/hooks/useStyles';
import {TypographyLegacy} from '../../../../typography';

import stylesCreate from './stylesCreate';
import {ICounterProps, ICounterSize, ICounterTypes} from './types';

const Counter: FC<ICounterProps> = ({
  count,
  style,
  size = ICounterSize.medium,
  type = ICounterTypes.accent,
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
      <TypographyLegacy style={styles.text} font={font}>
        {text}
      </TypographyLegacy>
    </View>
  );
};

export default Counter;
