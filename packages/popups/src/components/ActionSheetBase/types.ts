import {ViewStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';
import {ReactElement} from 'react';

export interface IPropsContents {
  title: string;
  textFont?: TypographyProp;
  leftIcon?: ReactElement;
  onPress?(): void;
  radio?: string;
  checkboxList?: string[];
}

export enum IItemType {
  firstItem = 'firstItem',
  innerItem = 'innerItem',
  lastItem = 'lastItem',
  singleItem = 'singleItem',
  cancelItem = 'cancelItem',
}

export interface IPropsItem extends IPropsContents {
  itemType: IItemType;
  style?: ViewStyle;
  disabled?: boolean;
}
