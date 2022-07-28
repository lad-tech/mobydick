import {ReactElement} from 'react';

interface IDropDownProps {
  title?: string;
  rightIcon?: ReactElement;
  placeholder: string;
  list: string[];
  onPress: (item: string) => void;
  selectedItem?: string;
  dropDownWidth?: number;
  dropDownHeight?: number;
  navBarHeight?: number;
  // need for ignore ref in test
  jestTest?: boolean;
}

interface IDropDownIconProps {
  isOpen: boolean;
  rightIcon?: ReactElement | undefined;
}

export type DropDownProps = IDropDownProps;
export type DropDownIconProps = IDropDownIconProps;
