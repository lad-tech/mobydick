import {FC} from 'react';

import {IControlProps} from '../types';
import Control from '../Control';
import ControlType from '../constants';
import {IPressableProps} from '../../basic/components/Pressable';
import useStyles from '../../styles/hooks/useStyles';
import Pressable from '../../basic/components/Pressable/Pressable';

import stylesCreate from './stylesCreate';

const CheckBox: FC<IControlProps & IPressableProps> = ({
  children,
  onPress,
  ...rest
}) => {
  const {disabled, selected, containerStyle} = rest;
  const [styles] = useStyles(stylesCreate, disabled, selected);
  return (
    <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
      <Control type={ControlType.checkBox} style={styles.checkbox} {...rest} />
      {children}
    </Pressable>
  );
};

export default CheckBox;
