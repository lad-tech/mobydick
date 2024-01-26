import {FC} from 'react';

import View from '../../../../basic/components/View/View';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';
import useTheme from '../../../../styles/theme/hooks/useTheme';
import {IDropDownIconProps} from '../types';

const DropDownIcon: FC<IDropDownIconProps> = props => {
  const {isOpen, rightIcon} = props;
  const {colors} = useTheme();
  return rightIcon ? (
    <View style={isOpen && {transform: [{rotateX: '180deg'}]}}>
      {rightIcon}
    </View>
  ) : (
    <SimpleIcon
      name={'icon-arrow-down'}
      color={colors.IconMuted}
      style={isOpen ? {transform: [{rotateX: '180deg'}]} : {}}
    />
  );
};

export default DropDownIcon;
