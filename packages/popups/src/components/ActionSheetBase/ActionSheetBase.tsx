import {View} from '@npm/mobydick-core';
import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {IPopup} from '../../types';
import {PopupBase} from '../PopupBase';

import Item from './Item';
import FirstItem from './FirstItem';
import InnerItem from './InnerItem';
import LastItem from './LastItem';
import CancelItem from './CancelItem';
import Label from './Label';

const ActionSheetBase: FC<
  Omit<IPopup, 'Content'> & {
    onClose: () => void;
    containerStyle?: StyleProp<ViewStyle>;
  }
> & {
  Item: typeof Item;
  FirstItem: typeof FirstItem;
  InnerItem: typeof InnerItem;
  LastItem: typeof LastItem;
  CancelItem: typeof CancelItem;
  Label: typeof Label;
} = props => {
  const {children, overlayStyle, onClose, containerStyle} = props;

  return (
    <PopupBase onClose={onClose} overlayStyle={overlayStyle}>
      <View style={[containerStyle]}>{children}</View>
    </PopupBase>
  );
};
ActionSheetBase.Item = Item;
ActionSheetBase.FirstItem = FirstItem;
ActionSheetBase.InnerItem = InnerItem;
ActionSheetBase.LastItem = LastItem;
ActionSheetBase.CancelItem = CancelItem;
ActionSheetBase.Label = Label;

export default ActionSheetBase;
