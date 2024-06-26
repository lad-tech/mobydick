import {ReactElement} from 'react';

export interface IPortal {
  node: ReactElement | ReactElement[];
  name: string;
}

export interface IPortalHosts {
  [host: string]: IPortal[];
}
export interface IPortalContext {
  hosts: IPortalHosts;
  mountPortal: (
    hostName: string,
    portalName: string,
    node: ReactElement | ReactElement[],
  ) => void;
  updatePortal: (
    hostName: string,
    portalName: string,
    node: ReactElement | ReactElement[],
  ) => void;
  unmountPortal: (hostName: string, portalName: string) => void;
}
