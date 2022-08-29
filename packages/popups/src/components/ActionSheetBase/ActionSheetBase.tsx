import {View} from '@npm/mobydick-core';
import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {IPopup} from '../../types';
import {PopupBase} from '../PopupBase';

import FirstItem from './FirstItem';
import InnerItem from './InnerItem';
import LastItem from './LastItem';
import CancelItem from './CancelItem';

const ActionSheetBase: FC<
  Omit<IPopup, 'Content'> & {
    onClose: () => void;
    containerStyle?: StyleProp<ViewStyle>;
  }
> & {
  FirstItem: typeof FirstItem;
  InnerItem: typeof InnerItem;
  LastItem: typeof LastItem;
  CancelItem: typeof CancelItem;
} = props => {
  const {children, overlayStyle, onClose, containerStyle} = props;

  return (
    <PopupBase onClose={onClose} overlayStyle={overlayStyle}>
      <View style={[containerStyle]}>{children}</View>
    </PopupBase>
  );
};

ActionSheetBase.FirstItem = FirstItem;
ActionSheetBase.InnerItem = InnerItem;
ActionSheetBase.LastItem = LastItem;
ActionSheetBase.CancelItem = CancelItem;

export default ActionSheetBase;
