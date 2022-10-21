import React from 'react';
import {CheckBox, Radio} from '@npm/mobydick-controls';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';

import {IPropsContents} from '../types';
import stylesCreate from '../stylesCreate';

const Contents = (props: IPropsContents) => {
  const {title, leftIcon, textFont, radio, checkboxList, onPress} = props;
  const [styles] = useStyles(stylesCreate);
  const check = checkboxList?.find(item => item === title) || radio === title;

  return (
    <>
      <View style={styles.leftIconView}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <Typography
          style={styles.textSelected}
          font={textFont || 'Regular-Primary-M'}>
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
