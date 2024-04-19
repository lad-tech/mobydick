import {useMemo} from 'react';

import useStyles from '../../../styles/hooks/useStyles';
import View from '../../../basic/components/View/View';
import {useTheme} from '../../../styles';

import stylesCreate from './stylesCreate';

interface IDot {
  active: boolean;
  size: number;
  activeDotColor?: string | undefined;
  passiveDotColor?: string | undefined;
}

const Dot = ({
  active,
  size,
  activeDotColor,
  passiveDotColor,
}: IDot): JSX.Element => {
  const [styles] = useStyles(stylesCreate, size);
  const {colors} = useTheme();

  const backgroundColor = useMemo(() => {
    return active
      ? activeDotColor || colors.ElementNeutral
      : passiveDotColor || colors.ElementMuted;
  }, [
    active,
    activeDotColor,
    colors.ElementMuted,
    colors.ElementNeutral,
    passiveDotColor,
  ]);

  return <View style={[styles.dot, {backgroundColor: backgroundColor}]} />;
};

export default Dot;
