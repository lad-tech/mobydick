import {useCallback} from 'react';
import {ViewStyle} from 'react-native';

import {IStatusState} from '../types';
import useStyles from '../../../../styles/hooks/useStyles';
import useTheme from '../../../../styles/hooks/useTheme';
import {Typography} from '../../../../typography';
import View from '../../../../basic/components/View/View';
import {createStyles} from '../../../../styles';

interface IProps {
  state: IStatusState;
  text: string;
  style?: ViewStyle | ViewStyle[] | undefined;
}
const StatusTag = ({state, text, style}: IProps) => {
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();

  const getFont = useCallback(() => {
    switch (state) {
      case IStatusState.blue:
        return 'Regular-Accent-XS';
      case IStatusState.red:
        return 'Regular-Error-XS';
      case IStatusState.green:
        return 'Regular-Success-XS';
      case IStatusState.orange:
        return 'Regular-Warning-XS';
      case IStatusState.gray:
      default:
        return 'Regular-Tertiary-XS';
    }
  }, [state]);

  const getBackgroundColorText = useCallback(() => {
    switch (state) {
      case IStatusState.blue:
        return colors.AdditionalSixthSoft;
      case IStatusState.red:
        return colors.BgError;
      case IStatusState.green:
        return colors.BgSuccess;
      case IStatusState.orange:
        return colors.BgWarning;
      case IStatusState.gray:
      default:
        return colors.BgSecondary;
    }
  }, [
    state,
    colors.AdditionalSixthSoft,
    colors.BgError,
    colors.BgSuccess,
    colors.BgWarning,
    colors.BgSecondary,
  ]);

  return (
    <View
      style={[
        styles.tag,
        {
          backgroundColor: getBackgroundColorText(),
        },
        style,
      ]}>
      <Typography font={getFont()}>{text}</Typography>
    </View>
  );
};

const stylesCreate = createStyles(({spaces}) => ({
  tag: {
    paddingVertical: spaces.Space2,
    paddingHorizontal: spaces.Space6,
    borderRadius: spaces.Space4,
  },
}));

export default StatusTag;
