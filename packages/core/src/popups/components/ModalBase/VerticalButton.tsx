import {FC} from 'react';

import {IButtonProps, IButtonSize} from '../../../cta/components/Button/types';
import Button from '../../../cta/components/Button/Button';

const VerticalButton: FC<IButtonProps> = props => {
  return <Button size={IButtonSize.fixed} {...props} />;
};

export default VerticalButton;
