import {createRef} from 'react';

import {IModalRef} from './types';

export const modalRef = createRef<IModalRef>();

const MobyDickPopup: IModalRef = {
  openPopup: (modal, props) => {
    modalRef.current?.openPopup(modal, props);
  },
  closePopup: id => {
    modalRef.current?.closePopup(id);
  },
  closeAllPopups: () => {
    modalRef.current?.closeAllPopups();
  },
};

export default MobyDickPopup;
