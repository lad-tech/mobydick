import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {TypographyProp} from '../../../typography/types';

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

export type IPopupProps = {
  overlayStyle?: StyleProp<ViewStyle>;
  onClose: () => void;
};
