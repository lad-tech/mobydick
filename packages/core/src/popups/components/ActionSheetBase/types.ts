import {ViewStyle} from 'react-native';
import {ReactElement} from 'react';

import {TypographyProp} from '../../../typography/types';

export interface IPropsContents {
  title: string;
  textFont?: TypographyProp;
  leftIcon?: ReactElement | undefined;
  onPress?(): void;
  radio?: string;
  checkboxList?: string[];
  disabled?: boolean;
  itemType: IItemType;
}

export enum IItemType {
  firstItem = 'firstItem',
  innerItem = 'innerItem',
  lastItem = 'lastItem',
  singleItem = 'singleItem',
  cancelItem = 'cancelItem',
}

export interface IPropsItem extends IPropsContents {
  style?: ViewStyle;
  isStatusPressedForTest?: boolean;
}
