import {TouchableOpacity, View} from '@npm/mobydick-core';
import {ViewStyle} from 'react-native';
import React, {FC, ReactElement} from 'react';
import {SimpleIcon, useStyles} from '@npm/mobydick-styles';

import {Typography, TypographyProp} from '../../../../typography';

import stylesCreate from './stylesCreate';

export interface IPropsItem {
  title?: string;
  subTitle?: string;
  label?: string;
  labelFont?: TypographyProp;
  onPress?(): void;
  style?: ViewStyle;
  textFont?: TypographyProp;
  leftIcon?: ReactElement;
  selected?: string;
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

  const textContent = () => {
    if (!subTitle) {
      return (
        <Typography font={textFont ? textFont : 'Regular-Primary-L'}>
          {title}
        </Typography>
      );
    }
    return (
      <View style={styles.title}>
        <Typography font={textFont ? textFont : 'Regular-Primary-M'}>
          {title}
        </Typography>
        <Typography font={'Regular-Tertiary-XXS'}>{subTitle}</Typography>
      </View>
    );
  };

  const leftIconContent = () => {
    return (
      <View style={styles.leftIconView}>
        <View style={styles.leftIcon}>{leftIcon}</View>
        {textContent()}
      </View>
    );
  };

  const getContents = () => {
    return (
      <>
        {leftIcon ? leftIconContent() : textContent()}
        {selected === title ? (
          <View style={styles.checkIcon}>
            <SimpleIcon name={'icon-check'} color={'#fff'} />
          </View>
        ) : null}
      </>
    );
  };

  if (disabled)
    return <View style={[styles.item, style]}>{getContents()}</View>;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.item, style]}
      onPress={onPress}>
      {getContents()}
    </TouchableOpacity>
  );
};

export default Item;
