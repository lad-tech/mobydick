import {StyleProp, ViewStyle} from 'react-native';
import React, {PropsWithChildren, ReactElement} from 'react';

import {TypographyProp} from '../../../typography/types';
import {IPopup} from '../../types';

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

export interface IActionSheetBaseProps
  extends PropsWithChildren<Omit<IPopup, 'Content'>> {
  onClose: () => void;
  overlayStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}
