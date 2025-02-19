import {FC} from 'react';

import {TypographyLegacy} from '../../../../typography/components/TypographyLegacy/TypographyLegacy';
import {IListEmptySelectorProps} from '../types';

const ListEmptySelector: FC<IListEmptySelectorProps> = ({
  listEmptyText,
  listEmptyFont,
}) => {
  const font = listEmptyFont ? listEmptyFont : 'Regular-Muted-M';
  const emptyText = listEmptyText
    ? listEmptyText
    : 'Данные недоступны. Повторите попытку позже.';

  return (
    <TypographyLegacy font={font} style={{paddingHorizontal: 12}}>
      {emptyText}
    </TypographyLegacy>
  );
};

export default ListEmptySelector;
