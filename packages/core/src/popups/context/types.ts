import {IPopup, IPopupId} from '../types';

export type IOpenPopupParams = Partial<IPopup> & Pick<IPopup, 'Content'>;

export interface IPopupsContext {
  popups: IPopup[];
  openPopup: (popup: IOpenPopupParams) => string;
  closePopup: (id: IPopupId) => void;
  closeAllPopups: () => void;
}
