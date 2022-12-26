import React, {FC} from 'react';

import Text from '../../../basic/components/Text/Text';
import {useFont} from '../../hooks';
import {IStyledTextProps} from '../../types';

export const Typography: FC<IStyledTextProps> = ({
  children,
  font = 'Regular-Primary-S',
  style,
  ...props
}) => {
  const {fontStyle} = useFont(font);

  return (
    <Text style={[fontStyle, style]} {...props}>
      {children}
    </Text>
  );
};
