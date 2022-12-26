import React from 'react';
import {TextStyle} from 'react-native';

import View from '../../../basic/components/View/View';
import {
  IStyledTextProps,
  Typography,
  TypographyProp,
} from '../../../typography';

interface IInputTitle {
  title: string;
  titleProps?: IStyledTextProps | undefined;
  titleStyle?: TextStyle | TextStyle[] | undefined;
  titleFont?: TypographyProp | undefined;
  required?: boolean | undefined;
}
const InputTitle = (props: IInputTitle) => {
  const {title, titleProps, titleFont, titleStyle, required} = props;

  return (
    <View style={{flexDirection: 'row'}}>
      <Typography
        font={titleFont || 'Medium-Tertiary-XS'}
        style={titleStyle}
        {...titleProps}>
        {title}
      </Typography>
      {required && <Typography font={'Medium-Error-XS'}>{'*'}</Typography>}
    </View>
  );
};

export default InputTitle;
