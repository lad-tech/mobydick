import {createRef} from 'react';

import {IPortalContext} from './types';

export const portalRef = createRef<IPortalContext>();

const MobyDickPortal: IPortalContext = {
  hosts: portalRef.current?.hosts ?? {},
  mountPortal: (...args) => {
    return portalRef.current?.mountPortal(...args);
  },
  updatePortal: (...args) => {
    return portalRef.current?.updatePortal(...args);
  },
  unmountPortal: (...args) => {
    portalRef.current?.unmountPortal(...args);
  },
};

export default MobyDickPortal;
