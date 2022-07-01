import {ViewStyle} from 'react-native';

import {IPopup} from '../../types';

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

export type IPopupProps = Pick<IPopup, 'overlayStyle'> & {
  onClose: () => void;
};
