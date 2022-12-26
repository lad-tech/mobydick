import {IPopup, IPopupId} from '../types';

export type IOpenPopupParams = Partial<IPopup> & Pick<IPopup, 'Content'>;

export interface IPopupsContext {
  popups: IPopup[];
  openPopup: (popup: IOpenPopupParams) => void;
  closePopup: (id: IPopupId) => void;
  closeAllPopups: () => void;
}
