import {IPopup} from '../../types';

export interface IPopupBaseProps {
  isVisible: boolean;
}

export type IPopupProps = IPopupBaseProps & IPopup;
