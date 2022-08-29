import {TouchableOpacity, View} from '@npm/mobydick-core';
import {ViewStyle} from 'react-native';
import React, {FC, ReactElement} from 'react';
import {SimpleIcon, useStyles, useTheme} from '@npm/mobydick-styles';

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

  const {colors} = useTheme();

  const check = selected?.find(item => item === title);

  const fontCorrection = () => {
    if (subTitle || selected) {
      return 'Regular-Primary-M';
    }
    return 'Regular-Primary-L';
  };

  const textContent = () => {
    if (!subTitle) {
      return (
        <Typography
          font={textFont ? textFont : fontCorrection()}
          style={styles.textSelected}>
          {title}
        </Typography>
      );
    }
    return (
      <View style={styles.title}>
        <Typography font={textFont ? textFont : fontCorrection()}>
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
        {check ? (
          <View style={styles.checkIcon}>
            <SimpleIcon
              name={'icon-check'}
              color={colors.IconWhite}
              size={20}
            />
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
