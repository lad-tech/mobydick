import React, {FC} from 'react';

import Button from '../../../cta/components/Button/Button';
import {IButtonProps, IButtonSize} from '../../../cta/components/Button/types';
import useTheme from '../../../styles/theme/hooks/useTheme';

const LeftButton: FC<IButtonProps> = props => {
  const {spaces} = useTheme();

  return (
    <Button
      size={IButtonSize.small}
      style={{alignSelf: 'flex-start', marginVertical: spaces.Space8}}
      {...props}
    />
  );
};

export default LeftButton;
