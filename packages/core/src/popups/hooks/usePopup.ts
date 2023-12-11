import {FC, useRef} from 'react';

import {IContentProps, ModalProps} from '../types';
import {MobyDickPopup} from '../MobyDickPopup';

const usePopup = <Props = object>(modal: FC<IContentProps & Props>) => {
  const id = useRef<string | null>(null);

  return {
    open: (props = {} as ModalProps<Props>) => {
      id.current = MobyDickPopup.openPopup({
        Content: modal,
        props: props,
      });
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
