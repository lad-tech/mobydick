import {FC} from 'react';

import {IButtonTypes} from '../cta/components/Button/types';

export type IPopupId = string;
export interface IContentProps extends Omit<IPopup, 'Content' | 'props'> {
  onClose: () => void;
  id: IPopupId;
}

export interface IPopup {
  id: IPopupId;
  Content: FC<IContentProps>;
  props?: Record<string, unknown>;
}

export enum IPosition {
  top = 'top',
  bottom = 'bottom',
}

export interface IHorizontalButtonsView {
  typeLeft: IButtonTypes;
  onPressLeft(): void;
  textLeft: string;
  disabledLeft?: boolean;

  typeRight: IButtonTypes;
  onPressRight(): void;
  textRight: string;
  disabledRight?: boolean;
}
