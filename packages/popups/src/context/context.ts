import {createContext} from 'react';

import {IPopupsContext} from './types';
import {MISSING_POPUPS_PROVIDER_WARNING} from './constants';

const missingFunc = () => {
  console.warn(MISSING_POPUPS_PROVIDER_WARNING);
};

const PopupsContext = createContext<IPopupsContext>({
  popups: [],
  openPopup: missingFunc,
  closePopup: missingFunc,
  closeAllPopups: missingFunc,
});

PopupsContext.displayName = '@npm/mobydick-popups/PopupsContext';

export default PopupsContext;
