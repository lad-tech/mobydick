import {ReactElement} from 'react';

export interface ITab {
  value: string;
  onPress?(): void;
  leftIcon?: ReactElement;
}

export interface ITabsProps {
  list: ITab[];
  defaultValue?: string;
}
