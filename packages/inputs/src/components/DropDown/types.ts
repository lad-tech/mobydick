import {ReactElement} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {IStyledTextProps, TypographyProp} from '@npm/mobydick-typography';
import {SimpleIconName} from '@npm/mobydick-styles';

import {IInputsTypes} from '../types';

export type IListItem<T> = {label: string; value: T};

export type IItemValue = string | number;

export interface IDropDownProps<
  T extends IListItem<S> | string,
  S extends IItemValue,
> {
  selectedItem: S | undefined;
  placeholder: string;
  list: T[];
  onPress: (
    item: T extends IListItem<S> ? Exclude<T, string>['value'] : string,
  ) => void;
  label?: string;
  rightIcon?: ReactElement;
  type?: IInputsTypes;
  disabled?: boolean;
  subtitle?: string;
  subtitleIcon?: SimpleIconName | undefined;
  subtitleProps?: IStyledTextProps;
  navBarHeight?: number;
  buttonStyle?: ViewStyle | undefined;
  flatListStyle?: ViewStyle | undefined;
  flatListItemStyle?: ViewStyle | undefined;
  labelStyle?: TextStyle | undefined;
  labelFont?: TypographyProp | undefined;
  buttonTextStyle?: TextStyle | undefined;
  buttonTextStyleChosen?: TextStyle | undefined;
  buttonTextFont?: TypographyProp | undefined;
  buttonTextFontChosen?: TypographyProp | undefined;
  flatListTextStyle?: TextStyle | undefined;
  flatListTextStylePressed?: TextStyle | undefined;
  flatListTextFont?: TypographyProp | undefined;
  flatListTextFontPressed?: TypographyProp | undefined;
  selectedItemColor?: string | undefined;
  maxVisibleListLength?: number;
  listEmptyText?: string | undefined;
  listEmptyFont?: TypographyProp | undefined;
}

export interface IDropDownIconProps {
  isOpen: boolean;
  rightIcon?: ReactElement | undefined;
}

export interface IListEmptySelectorProps {
  listEmptyText?: string | undefined;
  listEmptyFont?: TypographyProp | undefined;
}
