import {FC} from 'react';

import {IPopupsContext} from '../context';
import {IContentProps, IPopup} from '../types';

export type ModalProps = Partial<Omit<IContentProps, 'id'>>;

export interface IPopupWithProps extends IPopup {
  props: Record<string, unknown> & ModalProps;
}

export interface IModalRef
  extends Omit<IPopupsContext, 'openPopup' | 'popups'> {
  openPopup<Props>(
    Component: FC<Props & IContentProps>,
    props?: Props & ModalProps,
  ): string;
}
