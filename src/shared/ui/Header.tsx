import {FC} from 'react';

import {TypographyLegacy} from '@shared/ui';

const Header: FC<{title: string}> = ({title}) => {
  return (
    <TypographyLegacy font={'Regular-Primary-H5'}>{title}</TypographyLegacy>
  );
};

export default Header;
