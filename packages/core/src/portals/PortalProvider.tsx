import {FC, ReactElement, useCallback, useState} from 'react';

import PortalContext from './context';
import PortalHost from './components/PortalHost';
import {IPortalHosts} from './types';

interface IPortalProviderProps {
  rootName?: string;
  children: ReactElement;
}
export const PortalProvider: FC<IPortalProviderProps> = ({
  children,
  rootName = 'portalRoot',
}) => {
  const [hosts, setHosts] = useState<IPortalHosts>({});

  const mountPortal = useCallback(
    (
      hostName: string,
      portalName: string,
      node: ReactElement | ReactElement[],
    ) => {
      setHosts(oldHosts => {
        const host = oldHosts[hostName];

        return {
          ...oldHosts,
          [hostName]: [...(host ?? []), {name: portalName, node}],
        };
      });
    },
    [],
  );

  const updatePortal = useCallback(
    (
      hostName: string,
      portalName: string,
      node: ReactElement | ReactElement[],
    ) => {
      setHosts(oldHosts => {
        const host = oldHosts[hostName];

        return {
          ...oldHosts,
          [hostName]: (host ?? []).map(portal => {
            if (portal.name !== portalName) {
              return portal;
            }

            return {
              name: portalName,
              node,
            };
          }),
        };
      });
    },
    [],
  );

  const unmountPortal = useCallback((hostName: string, portalName: string) => {
    setHosts(oldHosts => {
      const host = oldHosts[hostName];

      return {
        ...oldHosts,
        [hostName]: (host ?? []).filter(portal => {
          return portal.name !== portalName;
        }),
      };
    });
  }, []);

  return (
    <PortalContext.Provider
      value={{
        hosts,
        mountPortal,
        updatePortal,
        unmountPortal,
      }}>
      {children}
      <PortalHost name={rootName} />
    </PortalContext.Provider>
  );
};
