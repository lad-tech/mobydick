import React, {useCallback} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';

import {IStatusState} from '../types';
import useStyles from '../../../../styles/theme/hooks/useStyles';
import useTheme from '../../../../styles/theme/hooks/useTheme';
import {Typography} from '../../../../typography';
import {IThemeContext} from '../../../../styles';
import View from '../../../../basic/components/View/View';

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
        return 'Regular-Accent-XXS';
      case IStatusState.red:
        return 'Regular-Error-XXS';
      case IStatusState.green:
        return 'Regular-Success-XXS';
      case IStatusState.orange:
        return 'Regular-Warning-XXS';
      case IStatusState.gray:
      default:
        return 'Regular-Tertiary-XXS';
    }
  }, [state]);

  const getBackgroundColorText = useCallback(() => {
    switch (state) {
      case IStatusState.blue:
        return colors.BgAccentSoft;
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
    colors.BgAccentSoft,
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

const stylesCreate = ({spaces}: IThemeContext) =>
  StyleSheet.create({
    tag: {
      paddingVertical: spaces.Space2,
      paddingHorizontal: spaces.Space6,
      borderRadius: spaces.Space4,
    },
  });

export default StatusTag;
