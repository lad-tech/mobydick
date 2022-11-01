import {View} from '@npm/mobydick-core';
import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {useStyles} from '@npm/mobydick-styles';

import {IPopup} from '../../types';
import {PopupBase} from '../PopupBase';
import {returnTrue} from '../../functions';

import stylesCreate from './stylesCreate';
import Item from './Item';

const ActionSheetBase: FC<
  Omit<IPopup, 'Content'> & {
    onClose: () => void;
    containerStyle?: StyleProp<ViewStyle>;
  }
> & {
  Item: typeof Item;
} = props => {
  const {children, overlayStyle, onClose, containerStyle} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <PopupBase onClose={onClose} overlayStyle={overlayStyle}>
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
