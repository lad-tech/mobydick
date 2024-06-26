import {ReactElement, useCallback, useContext} from 'react';

import PortalContext from '../context';

const usePortalHost = (name: string) => {
  const {
    hosts,
    mountPortal: _mountPortal,
    updatePortal: _updatePortal,
    unmountPortal: _unmountPortal,
  } = useContext(PortalContext);

  const portals = hosts[name] ?? [];

  const mountPortal = useCallback(
    (portalName: string, node: ReactElement | ReactElement[]) => {
      _mountPortal(name, portalName, node);
    },
    [_mountPortal, name],
  );

  const updatePortal = useCallback(
    (portalName: string, node: ReactElement | ReactElement[]) => {
      _updatePortal(name, portalName, node);
    },
    [_updatePortal, name],
  );

  const unmountPortal = useCallback(
    (portalName: string) => {
      _unmountPortal(name, portalName);
    },
    [_unmountPortal, name],
  );

  return {
    portals,
    mountPortal,
    updatePortal,
    unmountPortal,
  };
};

export default usePortalHost;
