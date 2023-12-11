import {StyleProp, ViewStyle} from 'react-native';
import {FC} from 'react';

import {IButtonTypes} from '../cta/components/Button/types';

export type IPopupId = string;

export interface IContentProps extends Omit<IPopup, 'Content'> {
  onClose: () => void;
  id: IPopupId;
}

export interface IPopup<Props = object> {
  id: IPopupId;
  Content: FC<IContentProps & Props>;
  overlayStyle?: StyleProp<ViewStyle>;
  props?: ModalProps<Props>;
}

export type ModalProps<Props> = Omit<Props, keyof IContentProps> & {
  onClose?(): void;
};

export enum IPosition {
  top = 'top',
  bottom = 'bottom',
}

export interface IHorizontalButtonsView {
  typeLeft: IButtonTypes;
  onPressLeft(): void;
  textLeft: string;
  disabledLeft?: boolean;

  typeRight: IButtonTypes;
  onPressRight(): void;
  textRight: string;
  disabledRight?: boolean;
}
