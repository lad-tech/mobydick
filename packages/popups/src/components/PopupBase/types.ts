import {ViewStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';

import {IPopup} from '../../types';

export interface ITitlePopup {
  title: string;
  titleStyles?: ViewStyle;
  titleFont?: TypographyProp;
}

export interface IDescriptionTextPopup {
  descriptionText: string;
  descriptionStyles?: ViewStyle;
  descriptionFont?: TypographyProp;
}

export interface IPopupCloseIcon {
  onPress(): void;
}

export type IPopupProps = Pick<IPopup, 'overlayStyle'> & {
  onClose: () => void;
};
