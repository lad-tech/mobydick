import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {TypographyLegacyProp} from '../../../typography/types';

export interface ITitlePopup {
  title: string;
  titleStyles?: TextStyle | TextStyle[];
  titleFont?: TypographyLegacyProp;
}

export interface IDescriptionTextPopup {
  descriptionText: string;
  descriptionStyles?: TextStyle | TextStyle[];
  descriptionFont?: TypographyLegacyProp;
}

export interface ITextContentProps {
  title?: string | undefined;
  titleStyles?: TextStyle | TextStyle[];
  titleFont?: TypographyLegacyProp;

  descriptionText?: string | undefined;
  descriptionStyles?: TextStyle | TextStyle[];
  descriptionFont?: TypographyLegacyProp;
}

export interface IPopupCloseIcon {
  onPress(): void;
}

export type IPopupProps = {
  overlayStyle?: StyleProp<ViewStyle>;
  onClose: () => void;
};
