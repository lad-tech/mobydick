import React from 'react';
import {CheckBox, Radio} from '@npm/mobydick-controls';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';

import {IItemType, IPropsContents} from '../types';
import stylesCreate from '../stylesCreate';

const Contents = (props: IPropsContents) => {
  const {
    title,
    leftIcon,
    textFont,
    radio,
    checkboxList,
    onPress,
    disabled,
    itemType,
  } = props;
  const [styles] = useStyles(stylesCreate);
  const check = checkboxList?.find(item => item === title) || radio === title;

  const selectFont = () => {
    if (itemType === IItemType.cancelItem) {
      return disabled ? 'Medium-Muted-M' : 'Medium-Accent-M';
    } else {
      return textFont || 'Regular-Primary-M';
    }
  };

  return (
    <>
      <View style={styles.leftIconView}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <Typography style={styles.textSelected} font={selectFont()}>
          {title}
        </Typography>
      </View>

      {checkboxList && (
        <CheckBox value={title} selected={Boolean(check)} onPress={onPress} />
      )}
      {radio !== undefined && (
        <Radio value={title} selected={Boolean(check)} onPress={onPress} />
      )}
    </>
  );
};

export default Contents;
