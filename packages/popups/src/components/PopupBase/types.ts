import {TextStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';

import {IPopup} from '../../types';

export interface ITitlePopup {
  title: string;
  titleStyles?: TextStyle | TextStyle[];
  titleFont?: TypographyProp;
}

export interface IDescriptionTextPopup {
  descriptionText: string;
  descriptionStyles?: TextStyle | TextStyle[];
  descriptionFont?: TypographyProp;
}

export interface IContentTextProps {
  title?: string;
  titleStyles?: TextStyle | TextStyle[];
  titleFont?: TypographyProp;

  descriptionText?: string;
  descriptionStyles?: TextStyle | TextStyle[];
  descriptionFont?: TypographyProp;
}

export interface IPopupCloseIcon {
  onPress(): void;
}

export type IPopupProps = Pick<IPopup, 'overlayStyle'> & {
  onClose: () => void;
};
