import {ViewStyle} from 'react-native';
import {ReactNode} from 'react';

import {IPopup, IPopupId} from '../../types';

export interface IPopupBaseProps {
  isVisible: boolean;
}

export interface ITitlePopup {
  title: string;
  titleStyles?: ViewStyle;
}

export interface IDescriptionTextPopup {
  descriptionText: string;
  descriptionStyles?: ViewStyle;
}

export interface IPopupCloseIcon {
  onPress(): void;
}

export interface IModalBase {
  id?: IPopupId;
  onClose?: () => void;
  children?: ReactNode;
}
export type IPopupProps = IPopupBaseProps & IPopup;
