import {ReactElement} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';

export interface IDropDownProps {
  label?: string;
  rightIcon?: ReactElement;
  placeholder: string;
  list: string[];
  onPress: (item: string) => void;
  selectedItem?: string;
  navBarHeight?: number;
  addButtonStyle?: ViewStyle;
  addFlatListStyle?: ViewStyle;
  addFlatListItemStyle?: ViewStyle;
  addLabelStyle?: TextStyle;
  addLabelFont?: TypographyProp;
  addButtonTextStyle?: TextStyle;
  addButtonTextStyleChosen?: TextStyle;
  addButtonTextFont?: TypographyProp;
  addButtonTextFontChosen?: TypographyProp;
  addFlatListTextStyle?: TextStyle;
  addFlatListTextStylePressed?: TextStyle;
  addFlatListTextFont?: TypographyProp;
  addFlatListTextFontPressed?: TypographyProp;
  selectedItemColor?: string;
  maxVisibleListLength?: number;
}

export interface IMarginsForIos {
  topIosMargin: number;
  bottomIosMargin: number;
}

export enum IIPhoneModel {
  iPhoneX = 'iPhone X',
  iPhoneXS = 'iPhone XS',
  iPhoneXSMAX = 'iPhone XS Max',
  iPhoneXR = 'iPhone XR',
  iPhone11 = 'iPhone 11',
  iPhone11Pro = 'iPhone 11 Pro',
  iPhone11ProMax = 'iPhone 11 Pro Max',
  iPhone12Mini = 'iPhone 12 mini',
  iPhone12 = 'iPhone 12',
  iPhone12Pro = 'iPhone 12 Pro',
  iPhone12ProMax = 'iPhone 12 Pro Max',
  iPhone13Mini = 'iPhone 13 mini',
  iPhone13 = 'iPhone 13',
  iPhone13Pro = 'iPhone 13 Pro',
  iPhone13ProMax = 'iPhone 13 Pro Max',
  // задел на будущее
  iPhone14Mini = 'iPhone 14 mini',
  iPhone14 = 'iPhone 14',
  iPhone14Pro = 'iPhone 14 Pro',
  iPhone14ProMax = 'iPhone 14 Pro Max',
  iPhone15Mini = 'iPhone 15 mini',
  iPhone15 = 'iPhone 15',
  iPhone15Pro = 'iPhone 15 Pro',
  iPhone15ProMax = 'iPhone 15 Pro Max',
}

export interface IDropDownIconProps {
  isOpen: boolean;
  rightIcon?: ReactElement | undefined;
}
