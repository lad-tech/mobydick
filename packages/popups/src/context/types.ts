import {IPopup, IPopupId} from '../types';

export interface IPopupsContext {
  popups: IPopup[];
  openPopup: (popup: Partial<IPopup>) => void;
  closePopup: (id: IPopupId) => void;
  closeAllPopups: () => void;
}
