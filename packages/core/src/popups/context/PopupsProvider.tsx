import {FC, useImperativeHandle, useReducer} from 'react';

import {IPopup, IPopupId} from '../types';
import {
  closeAllPopupsAction,
  closePopupAction,
  defaultState,
  openPopupAction,
  reducer,
} from '../reducer';
import {modalRef} from '../MobyDickPopup';

import {IOpenPopupParams, IPopupsContext} from './types';
import PopupsContext from './PopupsContext';

interface IPopupsProviderProps {
  popups?: IPopup[];
  children: React.ReactNode;
}

let popupId = 1;

const PopupsProvider: FC<IPopupsProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const openPopup = <Params,>({
    Content,
    ...params
  }: IOpenPopupParams<Params>) => {
    const modalId = params.id || (popupId++).toString();

    dispatch(
      openPopupAction({
        ...params,
        Content: Content as FC,
        id: modalId,
      }),
    );
    return modalId;
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

  useImperativeHandle(modalRef, () => ({
    openPopup,
    closePopup,
    closeAllPopups,
  }));

  return (
    <PopupsContext.Provider value={context}>
      {children}
      {state.popups.map(({props, Content, id}) => {
        return (
          <Content
            key={id}
            id={id}
            {...props}
            onClose={() => {
              props?.onClose && typeof props.onClose === 'function'
                ? props?.onClose()
                : closePopup(id);
            }}
          />
        );
      })}
    </PopupsContext.Provider>
  );
};

export default PopupsProvider;
