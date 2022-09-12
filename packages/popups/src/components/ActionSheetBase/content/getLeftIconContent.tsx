import {View} from '@npm/mobydick-core';
import React, {ReactElement} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {TypographyProp} from '@npm/mobydick-typography';

import stylesCreate from '../stylesCreate';

import getTextContent from './getTextContent';

const getLeftIconContent = (
  leftIcon?: ReactElement,
  subTitle?: string,
  selected?: string[],
  textFont?: TypographyProp,
  title?: string,
) => {
  const [styles] = useStyles(
    stylesCreate,
    Boolean(selected),
    Boolean(leftIcon),
  );
  return (
    <View style={styles.leftIconView}>
      <View style={styles.leftIcon}>{leftIcon}</View>
      {getTextContent(subTitle, selected, textFont, title)}
    </View>
  );
};

export default getLeftIconContent;
