import {FC, useRef} from 'react';

import {IContentProps, IPopup} from '../types';
import {MobyDickPopup} from '../MobyDickPopup';

const usePopup = <P extends IContentProps = IContentProps>(modal: FC<P>) => {
  const id = useRef<string | null>(null);

  return {
    open: (props: IPopup['props'] = {}) => {
      id.current = MobyDickPopup.openPopup({
        Content: modal as FC<IContentProps>,
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
