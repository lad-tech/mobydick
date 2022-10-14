import {createContext} from 'react';

import {IPopupsContext} from './types';

const missingFunc = () => {
  throw new Error(
    '[@npm/mobydick-popups] usePopups hook was called outside of context, wrap your app with PopupsProvider component',
  );
};

const PopupsContext = createContext<IPopupsContext>({
  popups: [],
  openPopup: missingFunc,
  closePopup: missingFunc,
  closeAllPopups: missingFunc,
});

PopupsContext.displayName = '@npm/mobydick-popups/PopupsContext';

export default PopupsContext;
