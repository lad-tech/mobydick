import {
  LayoutAnimationProperty,
  LayoutAnimationType,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {ReactElement} from 'react';

import {TypographyProp} from '../../../typography';

export interface ICollapsibleProps extends TouchableOpacityProps {
  title?: string;
  children?: ReactElement;
  duration?: number;
  containerStyle?: ViewStyle | ViewStyle[];
  headerStyle?: ViewStyle | ViewStyle[];
  titleStyle?: TextStyle | TextStyle[];
  fontTitle?: TypographyProp;
  typeAnimation?: LayoutAnimationType;
  creationPropAnimation?: LayoutAnimationProperty;
  numberOfLines?: number;
  initialState?: boolean;
  isAnimated?: boolean;
  titleBottomView?: ReactElement;
}
