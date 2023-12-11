import {IContentProps, IPopup, IPopupId} from '../types';

export type IOpenPopupParams<Props extends IContentProps = IContentProps> =
  Partial<IPopup<Props>> & Pick<IPopup<Props>, 'Content'>;

export interface IPopupsContext {
  popups: IPopup[];
  openPopup: (popup: IOpenPopupParams) => string;
  closePopup: (id: IPopupId) => void;
  closeAllPopups: () => void;
}
