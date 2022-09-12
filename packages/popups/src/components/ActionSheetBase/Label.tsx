import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Typography, TypographyProp} from '@npm/mobydick-typography';
import {ViewStyle} from 'react-native';
import {View} from '@npm/mobydick-core';

import stylesCreate from './stylesCreate';

export interface IPropsLabel {
  label: string;
  labelFont?: TypographyProp;
  style?: ViewStyle;
}

const Label: FC<IPropsLabel> = props => {
  const [styles] = useStyles(stylesCreate);
  const {label, labelFont, style} = props;

  return (
    <View style={[styles.item, style]}>
      <Typography
        style={styles.label}
        font={labelFont ? labelFont : 'Regular-Tertiary-XXS'}>
        {label}
      </Typography>
    </View>
  );
};

export default Label;
