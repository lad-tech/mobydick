import {ReactElement} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';

export type IListItem = string | {label: string; value: unknown};

export interface IDropDownProps<ListItem extends IListItem> {
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

export interface IDropDownIconProps {
  isOpen: boolean;
  rightIcon?: ReactElement | undefined;
}
