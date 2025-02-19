import usePortalHost from '../hooks/usePortalHost';

interface IParams {
  name: string;
}
const PortalHost = ({name}: IParams) => {
  const {portals} = usePortalHost(name);

  return <>{portals.map(portal => portal.node)}</>;
};

export default PortalHost;
