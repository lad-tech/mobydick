import {TextStyle} from 'react-native';

import {TypographyProp} from '../../../typography/types';
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

export interface ITextContentProps {
  title?: string | undefined;
  titleStyles?: TextStyle | TextStyle[];
  titleFont?: TypographyProp;

  descriptionText?: string | undefined;
  descriptionStyles?: TextStyle | TextStyle[];
  descriptionFont?: TypographyProp;
}

export interface IPopupCloseIcon {
  onPress(): void;
}

export type IPopupProps = Pick<IPopup, 'overlayStyle'> & {
  onClose: () => void;
};