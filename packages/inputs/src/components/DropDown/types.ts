import {ReactElement} from 'react';

interface IDropDownProps {
  title?: string;
  rightIcon?: ReactElement;
  placeholder: string;
  list: string[];
  onPress?: void;
  selectedItem?: string;
}

export enum ITypes {
  top = 'top',
  bottom = 'bottom',
  closed = 'closed',
}

export type DropDownProps = IDropDownProps;
