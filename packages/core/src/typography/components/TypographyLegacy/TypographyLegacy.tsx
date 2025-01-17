import {FC} from 'react';

import Text from '../../../basic/components/Text/Text';
import {useFont} from '../../hooks';
import {IStyledTextLegacyProps} from '../../types';

export const TypographyLegacy: FC<IStyledTextLegacyProps> = ({
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
