import {FC} from 'react';

import {Typography} from '@shared/ui';

const Header: FC<{title: string}> = ({title}) => {
  return <Typography font={'Regular-Primary-H5'}>{title}</Typography>;
};

export default Header;
