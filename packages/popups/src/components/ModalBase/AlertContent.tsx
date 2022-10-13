import React, {FC} from 'react';
import {rem, SimpleIcon, useStyles, useTheme} from '@npm/mobydick-styles';
import {View} from '@npm/mobydick-core';

import stylesCreate from './stylesCreate';
import {IAlertTypes} from './types';

interface IProps {
  type: IAlertTypes;
}
const AlertContent: FC<IProps> = props => {
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();

  const color = () => {
    switch (props.type) {
      case IAlertTypes.check:
        return colors.IconBase;
      case IAlertTypes.warning:
      default:
        return colors.IconAttention;
    }
  };
  const backgroundColor = () => {
    switch (props.type) {
      case IAlertTypes.check:
        return colors.BgAccentSoft;
      case IAlertTypes.warning:
      default:
        return colors.BgError;
    }
  };

  const name = () => {
    switch (props.type) {
      case IAlertTypes.check:
        return 'icon-check';
      case IAlertTypes.warning:
      default:
        return 'icon-warning';
    }
  };

  return (
    <View style={[styles.alertView, {backgroundColor: backgroundColor()}]}>
      <SimpleIcon name={name()} size={rem(36)} color={color()} />
    </View>
  );
};

export default AlertContent;
