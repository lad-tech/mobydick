import {FC} from 'react';

import {IPressableProps, Pressable} from '../../basic/components/Pressable';
import {ICommonControlProps} from '../types';
import {Check} from '../../styles/icons';
import rem from '../../styles/utils/rem';
import useTheme from '../../styles/hooks/useTheme';

const CheckSquare: FC<ICommonControlProps & IPressableProps> = ({
  selected,
  ...rest
}) => {
  const {colors} = useTheme();

  return (
    <Pressable {...rest}>
      {selected ? (
        <Check
          width={rem(20)}
          height={rem(20)}
          fill={rest.fill || colors.ElementBase}
        />
      ) : null}
    </Pressable>
  );
};

export default CheckSquare;
