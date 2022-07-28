import {ReactElement} from 'react';

interface IDropDownProps {
  title?: string;
  rightIcon?: ReactElement;
  placeholder: string;
  list: string[];
  onPress: (item: string) => void;
  selectedItem?: string;
  addBtnWidth?: number;
  addBtnHeight?: number;
  navBarHeight?: number;
}

interface IDropDownIconProps {
  open: boolean;
  rightIcon?: ReactElement | undefined;
}

export type DropDownProps = IDropDownProps;
export type DropDownIconProps = IDropDownIconProps;
