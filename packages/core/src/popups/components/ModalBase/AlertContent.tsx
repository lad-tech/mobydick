import {FC} from 'react';
import {ViewStyle} from 'react-native';

import SimpleIcon, {
  SimpleIconName,
} from '../../../styles/icons/font/SimpleIcon';
import useStyles from '../../../styles/hooks/useStyles';
import useTheme from '../../../styles/hooks/useTheme';
import View from '../../../basic/components/View/View';
import px from '../../../styles/utils/px';

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
        size={size || px(36)}
        color={color || colors.IconAccent}
      />
    </View>
  );
};

export default AlertContent;
