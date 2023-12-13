import {createRef} from 'react';

import {IModalRef} from './types';

export const modalRef = createRef<IModalRef>();

const MobyDickPopup: IModalRef = {
  openPopup: props => {
    return modalRef.current?.openPopup(props) as string;
  },
  closePopup: id => {
    modalRef.current?.closePopup(id);
  },
  closeAllPopups: () => {
    modalRef.current?.closeAllPopups();
  },
};

export default MobyDickPopup;
