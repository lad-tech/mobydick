import {FC} from 'react';

import {IButtonTypes} from '../cta/components/Button/types';

export type IPopupId = string;
export interface IContentProps {
  onClose: () => void;
  id: IPopupId;
}

export interface IPopup<Props = Record<string, unknown>> {
  id: IPopupId;
  Content: FC<IContentProps & Props>;
  props?: Omit<Props, keyof IContentProps> & Partial<IContentProps>;
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
