import React, {FC} from 'react';
import {Button, IButtonProps, IButtonSize} from '@npm/mobydick-cta';

const VerticalButton: FC<IButtonProps> = props => {
  return <Button size={IButtonSize.fixed} {...props} />;
};

export default VerticalButton;
