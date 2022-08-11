import {ReactElement} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';

export interface IDropDownProps<
  ListItem extends string | {label: string; value: unknown},
> {
  label?: string;
  rightIcon?: ReactElement;
  placeholder: string;
  list: ListItem[];
  onPress: (item: ListItem) => void;
  selectedItem?: ListItem | undefined;
  navBarHeight?: number;
  addButtonStyle?: ViewStyle | undefined;
  addFlatListStyle?: ViewStyle | undefined;
  addFlatListItemStyle?: ViewStyle | undefined;
  addLabelStyle?: TextStyle | undefined;
  addLabelFont?: TypographyProp | undefined;
  addButtonTextStyle?: TextStyle | undefined;
  addButtonTextStyleChosen?: TextStyle | undefined;
  addButtonTextFont?: TypographyProp | undefined;
  addButtonTextFontChosen?: TypographyProp | undefined;
  addFlatListTextStyle?: TextStyle | undefined;
  addFlatListTextStylePressed?: TextStyle | undefined;
  addFlatListTextFont?: TypographyProp | undefined;
  addFlatListTextFontPressed?: TypographyProp | undefined;
  selectedItemColor?: string | undefined;
  maxVisibleListLength?: number;
}

export interface IMarginsForIos {
  topIosMargin: number;
  bottomIosMargin: number;
}

export enum IPhoneModelEnum {
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
