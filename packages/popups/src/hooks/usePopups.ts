import {useContext} from 'react';

import {PopupsContext} from '../context';

const usePopups = () => {
  const context = useContext(PopupsContext);

  if (!context) {
    throw new Error(
      '[@mobydick/popups] usePopups hook was called outside of context, wrap your app with PopupsProvider component',
    );
  }

  return context;
};

export default usePopups;
