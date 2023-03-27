import {IButtonTypes} from '../../../cta';

export interface IModalProps {
  title: string;
  descriptionText: string;
  buttonText?: string;
}

export interface IModalAskProps {
  title: string;
  descriptionText: string;

  typeLeft?: IButtonTypes;
  textLeft?: string;

  onPressRight(): void;
  typeRight?: IButtonTypes;
  textRight?: string;
}
