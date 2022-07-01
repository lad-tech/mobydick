import {ViewStyle} from 'react-native';
import {FC} from 'react';

export type IPopupId = string | symbol;

export interface IContentProps extends Omit<IPopup, 'Content'> {
  onClose: () => void;
  id: IPopupId;
}

export interface IPopup {
  id: IPopupId;
  Content: FC<IContentProps>;
  overlayStyle?: ViewStyle | undefined;
}
