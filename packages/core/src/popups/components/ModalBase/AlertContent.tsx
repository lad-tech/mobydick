import React, {FC} from 'react';
import {ViewStyle} from 'react-native';

import SimpleIcon, {
  SimpleIconName,
} from '../../../styles/icons/font/SimpleIcon';
import useStyles from '../../../styles/theme/hooks/useStyles';
import useTheme from '../../../styles/theme/hooks/useTheme';
import View from '../../../basic/components/View/View';
import rem from '../../../styles/spaces/rem';

import stylesCreate from './stylesCreate';

interface IProps {
  name?: SimpleIconName;
  color?: string;
  size?: number;
  style?: ViewStyle | ViewStyle[];
}

const AlertContent: FC<IProps> = props => {
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();
  const {name, color, size, style} = props;

  return (
    <View style={[styles.alertView, style]}>
      <SimpleIcon
        name={name || 'icon-check'}
        size={size || rem(36)}
        color={color || colors.IconBase}
      />
    </View>
  );
};

export default AlertContent;
