import {FC, useRef} from 'react';

import {IContentProps, IPopup} from '../types';
import {MobyDickPopup} from '../MobyDickPopup';

const usePopup = <P>(modal: FC<P & IContentProps>) => {
  const id = useRef<string | null>(null);

  return {
    open: (props?: IPopup<P>['props']) => {
      id.current = MobyDickPopup.openPopup({
        Content: modal as FC<IContentProps>,
        props: props || {},
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
