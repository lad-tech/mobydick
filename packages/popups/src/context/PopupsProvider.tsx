import React, {FC, useReducer} from 'react';
import {PopupBase} from '@mobydick/popups';

import {
  reducer,
  defaultState,
  closeAllPopupsAction,
  closePopupAction,
  openPopupAction,
} from '../reducer';

import {IPopupId, IPopup, IPopupsContext} from './types';
import PopupsContext from './context';
interface IPopupsProviderProps {
  popups?: IPopup[];
}
const PopupsProvider: FC<IPopupsProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const openPopup = (popup: Partial<IPopup>) => {
    dispatch(
      openPopupAction({
        ...popup,
        id: popup.id || Symbol(''),
      }),
    );
  };

  const closePopup = (id: IPopupId) => {
    dispatch(closePopupAction(id));
  };

  const closeAllPopups = () => {
    state.popups.forEach(popup => {
      popup.onClose?.();
    });

    dispatch(closeAllPopupsAction());
  };

  const context: IPopupsContext = {
    popups: state.popups,
    openPopup,
    closePopup,
    closeAllPopups,
  };

  return (
    <PopupsContext.Provider value={context}>
      {children}

      {state.popups.map((popup, index) => (
        <PopupBase
          key={popup.id.toString() + index}
          isVisible={state.popups.length > 0}
          {...popup}
        />
      ))}
    </PopupsContext.Provider>
  );
};

export default PopupsProvider;
