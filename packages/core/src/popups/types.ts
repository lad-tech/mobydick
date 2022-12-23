import {StyleProp, ViewStyle} from 'react-native';
import {FC} from 'react';

import {IButtonTypes} from '../cta/components/Button/types';

export type IPopupId = string;

export interface IContentProps extends Omit<IPopup, 'Content'> {
  onClose: () => void;
  id: IPopupId;
}

export interface IPopup {
  id: IPopupId;
  Content: FC<IContentProps>;
  overlayStyle?: StyleProp<ViewStyle>;
}

export enum IPosition {
  top = 'top',
  bottom = 'bottom',
}

export interface IHorizontalButtonsView {
  typeLeft: IButtonTypes;
  onPressLeft(): void;
  textLeft: string;

  typeRight: IButtonTypes;
  onPressRight(): void;
  textRight: string;
}
