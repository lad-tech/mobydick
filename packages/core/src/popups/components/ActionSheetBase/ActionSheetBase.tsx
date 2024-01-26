import {FC} from 'react';

import {PopupBase} from '../PopupBase';
import {returnTrue} from '../../functions';
import useStyles from '../../../styles/theme/hooks/useStyles';
import View from '../../../basic/components/View/View';

import stylesCreate from './stylesCreate';
import Item from './Item';
import {IActionSheetBaseProps} from './types';

const ActionSheetBase: FC<IActionSheetBaseProps> & {
  Item: typeof Item;
} = props => {
  const {children, overlayStyle, onClose, containerStyle} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <PopupBase
      onClose={onClose}
      overlayStyle={[styles.overlayStyle, overlayStyle]}>
      <View
        style={[styles.containerStyle, containerStyle]}
        onStartShouldSetResponder={returnTrue}>
        {children}
      </View>
    </PopupBase>
  );
};

ActionSheetBase.Item = Item;
export default ActionSheetBase;
