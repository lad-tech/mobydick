import {IPopup, IPopupId} from '../types';
import {IPopupWithProps} from '../MobyDickPopup';

export type IOpenPopupParams = Partial<IPopup> & Pick<IPopup, 'Content'>;
export interface IPopupsContext {
  popups: (IPopup | IPopupWithProps)[];
  openPopup: (popup: IOpenPopupParams) => void;
  closePopup: (id: IPopupId) => void;
  closeAllPopups: () => void;
}
