import {ReactElement} from 'react';
import {TextStyle, ViewStyle} from 'react-native';

import {IInputsTypes} from '../types';
import {
  IStyledTextProps,
  TypographyLegacyProp,
  TypographyProp,
} from '../../../typography';
import {SimpleIconName} from '../../../styles/icons/font/SimpleIcon';

export type IListItem<T = IItemValue> = {label: string; value: T};

export type IItemValue = string | number;

export interface IDropDownProps<T extends IListItem> {
  selectedItem: T['value'] | undefined;
  placeholder: string;
  list: T[];
  onPress: (item: T['value']) => void;
  title?: string;
  titleStyle?: TextStyle | undefined;
  titleFont?: TypographyProp | undefined;
  required?: boolean;
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
  buttonTextStyle?: TextStyle | undefined;
  buttonTextStyleChosen?: TextStyle | undefined;
  buttonTextFont?: TypographyLegacyProp | undefined;
  buttonTextFontChosen?: TypographyLegacyProp | undefined;
  flatListTextStyle?: TextStyle | undefined;
  flatListTextStylePressed?: TextStyle | undefined;
  flatListTextFont?: TypographyLegacyProp | undefined;
  flatListTextFontPressed?: TypographyLegacyProp | undefined;
  selectedItemColor?: string | undefined;
  listEmptyText?: string | undefined;
  listEmptyFont?: TypographyLegacyProp | undefined;
  isMultiselect?: false;
}

export interface IDropDownMultiSelectProps<T extends IListItem>
  extends Omit<
    IDropDownProps<T>,
    'selectedItem' | 'onPress' | 'isMultiselect'
  > {
  selectedItem: T[] | undefined;
  onPress: (item: T[]) => void;
  isMultiselect: true;
}

export interface IDropDownIconProps {
  isOpen: boolean;
  rightIcon?: ReactElement | undefined;
}

export interface IListEmptySelectorProps {
  listEmptyText?: string | undefined;
  listEmptyFont?: TypographyLegacyProp | undefined;
}
