import React, {FC} from 'react';
import {Button, IButtonProps, ISize} from '@npm/mobydick-cta';

const VerticalButton: FC<IButtonProps> = props => {
  return <Button size={ISize.fixed} {...props} />;
};

export default VerticalButton;
