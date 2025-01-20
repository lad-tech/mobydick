import {FC} from 'react';

import {Title} from '@/shared/ui';

const Header: FC<{title: string}> = ({title}) => {
  return <Title font={'Primary-H5'}>{title}</Title>;
};

export default Header;
