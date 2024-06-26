import {createContext} from 'react';

import {IPortalContext} from '../types';

const missingFunc = () => {
  throw new Error(
    '[@lad-tech/mobydick-core] wrap your app with PortalProvider component',
  );
};

const PortalContext = createContext<IPortalContext>({
  hosts: {},
  mountPortal: missingFunc,
  updatePortal: missingFunc,
  unmountPortal: missingFunc,
});

PortalContext.displayName = '@lad-tech/mobydick-core/PortalContext';

export default PortalContext;
