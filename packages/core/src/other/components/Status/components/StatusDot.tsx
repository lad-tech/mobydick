import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';

import {IStatusState} from '../types';
import useTheme from '../../../../styles/theme/hooks/useTheme';
import useStyles from '../../../../styles/theme/hooks/useStyles';
import View from '../../../../basic/components/View/View';
import {IThemeContext} from '../../../../styles';

interface IProps {
  state: IStatusState;
}
const StatusDot = ({state}: IProps) => {
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();

  const getBackgroundColor = useCallback(() => {
    switch (state) {
      case IStatusState.blue:
        return colors.ElementBase;
      case IStatusState.red:
        return colors.ElementAttention;
      case IStatusState.green:
        return colors.ElementSuccess;
      case IStatusState.orange:
        return colors.ElementAdditional;
      case IStatusState.gray:
      default:
        return colors.ElementMuted;
    }
  }, [state]);

  return <View style={[styles.dot, {backgroundColor: getBackgroundColor()}]} />;
};

const stylesCreate = ({spaces}: IThemeContext) =>
  StyleSheet.create({
    dot: {
      width: spaces.Space8,
      height: spaces.Space8,
      borderRadius: spaces.Space8 / 2,
    },
  });

export default StatusDot;
