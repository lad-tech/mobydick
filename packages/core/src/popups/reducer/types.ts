import {IPopupId, IPopup} from '../types';

import {POPUP_CLOSE, POPUP_CLOSE_ALL, POPUP_OPEN} from './constatnts';

export interface IState {
  popups: IPopup[];
  currentPopup: IPopup | null;
}

export interface IOpenAction {
  type: typeof POPUP_OPEN;
  popup: IPopup;
}
export interface ICloseAction {
  type: typeof POPUP_CLOSE;
  id: IPopupId;
}
export interface ICloseAllAction {
  type: typeof POPUP_CLOSE_ALL;
}

export type Actions = IOpenAction | ICloseAction | ICloseAllAction;
