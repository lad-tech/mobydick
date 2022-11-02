import {Button, IButtonProps, IButtonSize} from '@npm/mobydick-cta';
import React, {FC} from 'react';
import {useTheme} from '@npm/mobydick-styles';

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
