import {IPopupId, IPopup} from '../types';
import {IPopupWithProps} from '../MobyDickPopup';

import {POPUP_CLOSE, POPUP_CLOSE_ALL, POPUP_OPEN} from './constatnts';
import {ICloseAction, ICloseAllAction, IOpenAction} from './types';

export const openPopupAction = (
  popup: IPopup | IPopupWithProps,
): IOpenAction => ({
  type: POPUP_OPEN,
  popup,
});

export const closePopupAction = (id: IPopupId): ICloseAction => ({
  type: POPUP_CLOSE,
  id,
});

export const closeAllPopupsAction = (): ICloseAllAction => ({
  type: POPUP_CLOSE_ALL,
});
