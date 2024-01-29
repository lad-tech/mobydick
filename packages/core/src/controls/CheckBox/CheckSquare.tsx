import {FC} from 'react';

import {IPressableProps, Pressable} from '../../basic/components/Pressable';
import {ICommonControlProps} from '../types';
import {Check} from '../../styles/icons';
import rem from '../../styles/utils/rem';

const CheckSquare: FC<ICommonControlProps & IPressableProps> = ({
  selected,
  ...rest
}) => {
  return (
    <Pressable {...rest}>
      {selected ? <Check width={rem(20)} height={rem(20)} /> : null}
    </Pressable>
  );
};

export default CheckSquare;
