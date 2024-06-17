import {FC} from 'react';

import {IBodyProps} from '../../types';
import Text from '../../../basic/components/Text/Text';
import {useFontBody} from '../../hooks/useFontBody';

export const Typography: FC<IBodyProps> = ({
  children,
  font = 'Regular-Primary-S',
  style,
  ...props
}) => {
  const {fontStyle} = useFontBody(font);
  return (
    <Text style={[fontStyle, style]} {...props}>
      {children}
    </Text>
  );
};
