import {useCallback} from 'react';
import {ViewStyle} from 'react-native';

import {IStatusState} from '../types';
import useTheme from '../../../../styles/hooks/useTheme';
import useStyles from '../../../../styles/hooks/useStyles';
import View from '../../../../basic/components/View/View';
import {createStyles} from '../../../../styles';

interface IProps {
  state: IStatusState;
  style?: ViewStyle | ViewStyle[] | undefined;
}
const StatusDot = ({state, style}: IProps) => {
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
  }, [
    state,
    colors.ElementAdditional,
    colors.ElementBase,
    colors.ElementAttention,
    colors.ElementSuccess,
    colors.ElementMuted,
  ]);

  return (
    <View
      style={[styles.dot, {backgroundColor: getBackgroundColor()}, style]}
    />
  );
};

const stylesCreate = createStyles(({spaces}) => ({
  dot: {
    width: spaces.Space8,
    height: spaces.Space8,
    borderRadius: spaces.Space8 / 2,
  },
}));

export default StatusDot;
