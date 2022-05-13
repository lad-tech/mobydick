import {POPUP_CLOSE, POPUP_CLOSE_ALL, POPUP_OPEN} from './constatnts';
import {Actions, IState} from './types';

export const defaultState: IState = {
  popups: [],
  currentPopup: null,
};

export const reducer = (state: IState, action: Actions): IState => {
  switch (action.type) {
    case POPUP_OPEN:
      return {
        ...state,
        popups: [...state.popups, action.popup],
        currentPopup: action.popup,
      };
    case POPUP_CLOSE:
      return {
        ...state,
        popups: state.popups.filter(item => item.id !== action.id),
        currentPopup: state.popups[state.popups.length - 2] || null,
      };
    case POPUP_CLOSE_ALL:
      return {
        ...state,
        popups: [],
        currentPopup: null,
      };
    default:
      return state;
  }
};
