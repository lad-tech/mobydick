import {ReactElement, useEffect} from 'react';

import usePortal from '../hooks/usePortal';

interface IParams {
  portalName?: string;
  hostName?: string;
  children: ReactElement | ReactElement[];
}
const Portal = ({
  portalName = 'portalName',
  hostName = 'portalRoot',
  children,
}: IParams) => {
  const {updatePortal, unmountPortal, mountPortal} = usePortal({
    portalName,
    hostName,
  });

  useEffect(() => {
    mountPortal(portalName, children);
    return () => {
      unmountPortal(portalName);
    };
  }, []);

  useEffect(() => {
    updatePortal(portalName, children);
  }, [children, portalName, updatePortal]);

  return null;
};

export default Portal;
