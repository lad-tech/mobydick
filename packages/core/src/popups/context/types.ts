import {IPopup, IPopupId} from '../types';

export type IOpenPopupParams<Props> = Partial<IPopup<Props>> &
  Pick<IPopup<Props>, 'Content'>;

export interface IPopupsContext {
  popups: IPopup[];
  openPopup: <Props>(popup: IOpenPopupParams<Props>) => string;
  closePopup: (id: IPopupId) => void;
  closeAllPopups: () => void;
}
