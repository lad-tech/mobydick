import {StyleProp, ViewStyle} from 'react-native';

export type TStar = {
  filled: boolean;
  starId: number;
  setRating: (data: number) => void;
  currentSelected: number;
  iconSize: number;
  iconStyle?: StyleProp<ViewStyle>;
  fillColor?: string;
  disabled?: boolean;
};

export type TRating = {
  onChange?: (data: number) => void;
  count: number;
  iconStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
  fillColor?: string;
  currentRate?: number;
  disabled?: boolean;
};
