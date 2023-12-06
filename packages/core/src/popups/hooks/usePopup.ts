import {FC, useRef} from 'react';

import {IContentProps} from '../types';
import {MobyDickPopup, ModalProps} from '../MobyDickPopup';

const usePopup = <Props>(modal: FC<Props & IContentProps>) => {
  const id = useRef<string | null>(null);

  return {
    open: (props?: Props & ModalProps) => {
      id.current = MobyDickPopup.openPopup(modal, props);
    },
    close: () => {
      if (id.current) {
        MobyDickPopup.closePopup(id.current);
        id.current = null;
      }
    },
    closeAll: () => {
      MobyDickPopup.closeAllPopups();
    },
  };
};

export default usePopup;
