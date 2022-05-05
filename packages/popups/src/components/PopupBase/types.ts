import {IPopup} from '../../context/types';

export interface IPopupBaseProps {
  isVisible: boolean;
}

export type IPopupProps = IPopupBaseProps & IPopup;
