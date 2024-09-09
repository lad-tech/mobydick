import {StyleProp, ViewStyle} from 'react-native';

export interface ISwipe {
  active: boolean;
  disabled?: boolean;
  onPress: (isActive: boolean) => void;
  activeColor?: string;
  passiveColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  switcherStyle?: StyleProp<ViewStyle>;
}
