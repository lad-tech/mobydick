import {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {PopupBase} from '../PopupBase';
import {returnTrue} from '../../functions';
import useStyles from '../../../styles/hooks/useStyles';

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
      <SafeAreaView
        style={[styles.containerStyle, containerStyle]}
        onStartShouldSetResponder={returnTrue}>
        {children}
      </SafeAreaView>
    </PopupBase>
  );
};

ActionSheetBase.Item = Item;
export default ActionSheetBase;
