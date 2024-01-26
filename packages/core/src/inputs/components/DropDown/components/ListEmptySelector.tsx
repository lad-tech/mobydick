import {FC} from 'react';

import {Typography} from '../../../../typography/components/Typography/Typography';
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
    <Typography font={font} style={{paddingHorizontal: 12}}>
      {emptyText}
    </Typography>
  );
};

export default ListEmptySelector;
