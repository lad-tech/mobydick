import {IStyledTextProps, Typography} from '@npm/mobydick-typography';
import React from 'react';

import {ITypes} from './types';

interface ISubtitle {
  type: ITypes;
  subtitle: string;
  subtitleProps?: IStyledTextProps | undefined;
}
const Subtitle = (props: ISubtitle) => {
  const {type, subtitle, subtitleProps} = props;

  return (
    <Typography
      font={type === ITypes.wrong ? 'Regular-Error-XXS' : 'Regular-Muted-XXS'}
      {...subtitleProps}>
      {subtitle}
    </Typography>
  );
};

export default Subtitle;
