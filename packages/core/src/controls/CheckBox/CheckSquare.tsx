import {FC} from 'react';

import {IPressableProps, Pressable} from '../../basic/components/Pressable';
import {ICommonControlProps} from '../types';
import {Check} from '../../styles/icons';
import useTheme from '../../styles/hooks/useTheme';
import px from '../../styles/utils/px';

const CheckSquare: FC<ICommonControlProps & IPressableProps> = ({
  selected,
  ...rest
}) => {
  const {colors} = useTheme();
  const width = rest.width || px(20);
  const height = rest.height || px(20);

  return (
    <Pressable {...rest}>
      {selected ? (
        <Check
          width={width}
          height={height}
          fill={rest.fill || colors.ElementAccent}
        />
      ) : null}
    </Pressable>
  );
};

export default CheckSquare;
