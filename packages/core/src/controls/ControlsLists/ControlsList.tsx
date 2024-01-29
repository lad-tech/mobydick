import {FC} from 'react';

import useStyles from '../../styles/hooks/useStyles';
import View from '../../basic/components/View/View';

import {IControlsList} from './types';
import useCloneControls from './useCloneControls';
import stylesCreate from './stylesCreate';

const ControlsList: FC<IControlsList> = ({
  single = false,
  horizontal = false,
  onChange,
  disabled = false,
  children,
  values,
  listStyles,
}) => {
  const {radios} = useCloneControls(
    children,
    values,
    onChange,
    single,
    disabled,
  );
  const [styles] = useStyles(stylesCreate, horizontal);

  return <View style={[styles.list, listStyles]}>{radios}</View>;
};

export default ControlsList;
