import React, {FC, useReducer} from 'react';

import {IPopup, IPopupId} from '../types';
import {
  reducer,
  defaultState,
  closeAllPopupsAction,
  closePopupAction,
  openPopupAction,
} from '../reducer';

import {IOpenPopupParams, IPopupsContext} from './types';
import PopupsContext from './PopupsContext';

interface IPopupsProviderProps {
  popups?: IPopup[];
}

let popupId = 1;

const PopupsProvider: FC<IPopupsProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const openPopup = (popup: IOpenPopupParams) => {
    dispatch(
      openPopupAction({
        ...popup,
        id: popup.id || (popupId++).toString(),
      }),
    );
  };

  const closePopup = (id: IPopupId) => {
    dispatch(closePopupAction(id));
  };

  const closeAllPopups = () => {
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
      {state.popups.map(popup => (
        <popup.Content
          key={popup.id}
          {...popup}
          onClose={() => closePopup(popup.id)}
        />
      ))}
    </PopupsContext.Provider>
  );
};

export default PopupsProvider;
