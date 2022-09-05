import {TouchableOpacity, View} from '@npm/mobydick-core';
import {ViewStyle} from 'react-native';
import React, {FC, ReactElement} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {TypographyProp} from '@npm/mobydick-typography';

import stylesCreate from './stylesCreate';
import getContents from './content/getContents';

export interface IPropsItem {
  title?: string;
  subTitle?: string;
  label?: string;
  labelFont?: TypographyProp;
  onPress?(): void;
  style?: ViewStyle;
  textFont?: TypographyProp;
  leftIcon?: ReactElement;
  selected?: string[];
  disabled?: boolean;
}

const Item: FC<IPropsItem> = props => {
  const {
    title,
    subTitle,
    textFont,
    onPress,
    style,
    leftIcon,
    selected,
    disabled,
  } = props;
  const [styles] = useStyles(
    stylesCreate,
    Boolean(selected),
    Boolean(leftIcon),
  );

  if (disabled) {
    return (
      <View style={[styles.item, style]}>
        {getContents(leftIcon, subTitle, selected, textFont, title)}
      </View>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.item, style]}
      onPress={onPress}>
      {getContents(leftIcon, subTitle, selected, textFont, title)}
    </TouchableOpacity>
  );
};

export default Item;
