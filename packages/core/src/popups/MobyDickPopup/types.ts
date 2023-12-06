import {FC} from 'react';

import {IPopupsContext} from '../context';
import {IContentProps, IPopup} from '../types';

export type ModalProps = Partial<Omit<IContentProps, 'onClose'>> & {
  onClose?(id: string): void;
};

export interface IPopupWithProps extends IPopup {
  props: Record<string, unknown> & ModalProps;
}

export interface IModalRef extends Pick<IPopupsContext, 'closeAllPopups'> {
  openPopup<Props>(
    Component: FC<Props & IContentProps>,
    props?: Props & ModalProps,
  ): void;
  closePopup(id: string): void;
}
