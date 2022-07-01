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
import PopupsContext from './context';
interface IPopupsProviderProps {
  popups?: IPopup[];
}

const PopupsProvider: FC<IPopupsProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const openPopup = (popup: IOpenPopupParams) => {
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
        <popup.Content
          key={popup.id.toString() + index}
          {...popup}
          onClose={() => closePopup(popup.id)}
        />
      ))}
    </PopupsContext.Provider>
  );
};

export default PopupsProvider;
