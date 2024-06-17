import {
  LayoutAnimationProperty,
  LayoutAnimationType,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {ReactElement} from 'react';

import {TypographyLegacyProp} from '../../../typography';

export interface ICollapsibleProps extends TouchableOpacityProps {
  title?: string;
  duration?: number;
  containerStyle?: ViewStyle | ViewStyle[];
  headerStyle?: ViewStyle | ViewStyle[];
  titleStyle?: TextStyle | TextStyle[];
  fontTitle?: TypographyLegacyProp;
  typeAnimation?: LayoutAnimationType;
  creationPropAnimation?: LayoutAnimationProperty;
  numberOfLines?: number;
  initialState?: boolean;
  isAnimated?: boolean;
  titleBottomView?: ReactElement;
}
