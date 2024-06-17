import {FC} from 'react';

import {useFontHeader} from '../../hooks/useFontHeader';
import {IHeaderProps} from '../../types';
import Text from '../../../basic/components/Text/Text';

export const Title: FC<IHeaderProps> = ({
  children,
  font = 'Primary-H1',
  style,
  ...props
}) => {
  const {fontStyle} = useFontHeader(font);
  return (
    <Text style={[fontStyle, style]} {...props}>
      {children}
    </Text>
  );
};
