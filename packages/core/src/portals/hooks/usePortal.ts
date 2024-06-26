import usePortalHost from './usePortalHost';

interface IParams {
  portalName: string;
  hostName: string;
}
const usePortal = ({hostName}: IParams) => {
  const {updatePortal, unmountPortal, mountPortal} = usePortalHost(hostName);

  return {mountPortal, updatePortal, unmountPortal};
};

export default usePortal;
