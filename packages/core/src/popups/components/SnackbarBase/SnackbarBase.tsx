import {FC, useEffect, useRef} from 'react';

import {returnTrue} from '../../functions';
import useStyles from '../../../styles/hooks/useStyles';
import View from '../../../basic/components/View/View';

import SnackbarTitle from './SnackbarTitle';
import stylesCreate from './stylesCreate';
import {ISnackbarProps} from './types';

const DEFAULT_TIME_SHOW = 5000;

const SnackbarBase: FC<ISnackbarProps> & {
  Title: typeof SnackbarTitle;
} = props => {
  const {children, onClose, containerStyle, overlayStyle, position, timeShow} =
    props;
  const [styles] = useStyles(stylesCreate, position);

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeout.current = setTimeout(
      () => {
        onClose();
      },
      timeShow ? timeShow : DEFAULT_TIME_SHOW,
    );

    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, []);

  return (
    <View style={[styles.overlayStyle, overlayStyle]}>
      <View
        style={[styles.container, containerStyle]}
        onStartShouldSetResponder={returnTrue}>
        {children}
      </View>
    </View>
  );
};

SnackbarBase.Title = SnackbarTitle;
export default SnackbarBase;
