import React from 'react';

import {IInputsTypes} from '../types';
import {SimpleIcon, SimpleIconName} from '../../../styles/icons';
import {IStyledTextProps} from '../../../typography/types';
import useTheme from '../../../styles/theme/hooks/useTheme';
import View from '../../../basic/components/View/View';
import {Typography} from '../../../typography';

interface ISubtitle {
  type: IInputsTypes;
  subtitle: string;
  subtitleIcon?: SimpleIconName | undefined;
  subtitleProps?: IStyledTextProps | undefined;
}

const InputSubtitle = (props: ISubtitle) => {
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
export default InputSubtitle;
