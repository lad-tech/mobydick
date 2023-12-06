import {IPopup} from '../types';

import {IPopupWithProps} from './types';

const isPopupWithProps = (
  it: IPopupWithProps | IPopup,
): it is IPopupWithProps => {
  return Object.prototype.hasOwnProperty.call(it, 'props');
};
export default isPopupWithProps;
