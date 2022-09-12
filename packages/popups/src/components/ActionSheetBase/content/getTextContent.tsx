import {Typography, TypographyProp} from '@npm/mobydick-typography';
import {View} from '@npm/mobydick-core';
import React from 'react';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from '../stylesCreate';

import getFont from './getFont';

const getTextContent = (
  subTitle?: string,
  selected?: string[],
  textFont?: TypographyProp,
  title?: string,
) => {
  const [styles] = useStyles(stylesCreate, Boolean(selected));
  if (!subTitle) {
    return (
      <Typography
        font={getFont(subTitle, selected, textFont)}
        style={styles.textSelected}>
        {title}
      </Typography>
    );
  }
  return (
    <View style={styles.title}>
      <Typography font={getFont(subTitle, selected, textFont)}>
        {title}
      </Typography>
      <Typography font={'Regular-Tertiary-XXS'}>{subTitle}</Typography>
    </View>
  );
};

export default getTextContent;
