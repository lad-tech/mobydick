import {ViewStyle} from 'react-native';
import {FC} from 'react';

export type IPopupId = string | symbol;

export interface IContentProps {
  onClose: () => void;
  id: IPopupId;
}

export interface IPopup {
  id: IPopupId;
  onClose: () => void;
  Content: FC<IContentProps>;
  overlayStyle?: ViewStyle;
}
