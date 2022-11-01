import {IStyledTextProps, Typography} from '@npm/mobydick-typography';
import React from 'react';
import {SimpleIcon, SimpleIconName, useTheme} from '@npm/mobydick-styles';
import {View} from '@npm/mobydick-core';

import {IInputsTypes} from './types';

interface ISubtitle {
  type: IInputsTypes;
  subtitle: string;
  subtitleIcon?: SimpleIconName | undefined;
  subtitleProps?: IStyledTextProps | undefined;
}
const Subtitle = (props: ISubtitle) => {
  const {type, subtitle, subtitleIcon, subtitleProps} = props;
  const {colors, spaces} = useTheme();

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {subtitleIcon && (
        <SimpleIcon
          name={subtitleIcon}
          size={spaces.Space16}
          color={
            type === IInputsTypes.wrong ? colors.TextError : colors.TextMuted
          }
          style={{marginRight: spaces.Space4}}
        />
      )}
      <Typography
        font={
          type === IInputsTypes.wrong
            ? 'Regular-Error-XXS'
            : 'Regular-Muted-XXS'
        }
        style={{flex: 1}}
        {...subtitleProps}>
        {subtitle}
      </Typography>
    </View>
  );
};
export default Subtitle;
