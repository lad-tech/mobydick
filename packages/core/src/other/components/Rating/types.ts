import {StyleProp, ViewStyle} from 'react-native';

export type TStar = {
  filled: boolean;
  starIndex: number;
  setRating: (data: number) => void;
  iconSize: number;
  iconStyle?: StyleProp<ViewStyle>;
  fillColor?: string;
  disabled?: boolean;
};

export type TRating = {
  setCurrentRate: (data: number) => void;
  count: number;
  iconStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
  fillColor?: string;
  currentRate: number;
  disabled?: boolean;
};
