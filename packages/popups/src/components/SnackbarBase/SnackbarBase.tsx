import React, {FC, useEffect, useRef} from 'react';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import Title from './Title';
import stylesCreate from './stylesCreate';
import {ISnackbarProps} from './types';

const DEFAULT_TIME_SHOW = 5000;

const SnackbarBase: FC<ISnackbarProps> & {Title: typeof Title} = props => {
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
      <View style={[styles.container, containerStyle]}>{children}</View>
    </View>
  );
};

SnackbarBase.Title = Title;
export default SnackbarBase;
