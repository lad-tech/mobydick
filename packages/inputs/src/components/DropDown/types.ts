import {ReactElement} from 'react';

export interface IDropDownProps {
  title?: string;
  rightIcon?: ReactElement;
  placeholder: string;
  list: string[];
  onPress: (item: string) => void;
  selectedItem?: string;
  dropDownWidth?: number;
  dropDownHeight?: number;
  navBarHeight?: number;
}

export interface IDropDownIconProps {
  isOpen: boolean;
  rightIcon?: ReactElement | undefined;
}
