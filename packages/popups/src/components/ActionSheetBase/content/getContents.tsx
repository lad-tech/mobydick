import {View} from '@npm/mobydick-core';
import {SimpleIcon, useStyles, useTheme} from '@npm/mobydick-styles';
import React, {ReactElement} from 'react';
import {TypographyProp} from '@npm/mobydick-typography';

import stylesCreate from '../stylesCreate';

import getTextContent from './getTextContent';
import getLeftIconContent from './getLeftIconContent';

const getContents = (
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

  const {colors} = useTheme();

  const check = selected?.find(item => item === title);

  return (
    <>
      {leftIcon
        ? getLeftIconContent(leftIcon, subTitle, selected, textFont, title)
        : getTextContent(subTitle, selected, textFont, title)}
      {check ? (
        <View style={styles.checkIcon}>
          <SimpleIcon name={'icon-check'} color={colors.IconWhite} size={20} />
        </View>
      ) : null}
    </>
  );
};

export default getContents;
