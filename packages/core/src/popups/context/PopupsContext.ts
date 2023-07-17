import {createContext} from 'react';

import {IPopupsContext} from './types';

const missingFunc = () => {
  throw new Error(
    '[@lad-tech/mobydick-core] usePopups hook was called outside of context, wrap your app with PopupsProvider component',
  );
};

const PopupsContext = createContext<IPopupsContext>({
  popups: [],
  openPopup: missingFunc,
  closePopup: missingFunc,
  closeAllPopups: missingFunc,
});

PopupsContext.displayName = '@lad-tech/mobydick-core/PopupsContext';

export default PopupsContext;
