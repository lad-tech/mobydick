import {useMemo} from 'react';

import {IInputsTypes} from '../types';
import {SimpleIcon, SimpleIconName} from '../../../styles/icons';
import {IStyledTextProps} from '../../../typography/types';
import useTheme from '../../../styles/hooks/useTheme';
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

  const color = useMemo(() => {
    switch (type) {
      case IInputsTypes.wrong:
        return colors.TextError;
      case IInputsTypes.warning:
        return colors.TextWarning;
      default:
        return colors.TextMuted;
    }
  }, [colors.TextError, colors.TextMuted, colors.TextWarning, type]);

  const font = useMemo(() => {
    switch (type) {
      case IInputsTypes.wrong:
        return 'Regular-Error-XS';
      case IInputsTypes.warning:
        return 'Regular-Warning-XS';
      default:
        return 'Regular-Muted-XS';
    }
  }, [type]);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {subtitleIcon && (
        <SimpleIcon
          name={subtitleIcon}
          size={spaces.Space16}
          color={color}
          style={{marginRight: spaces.Space4}}
        />
      )}
      <Typography font={font} style={{flex: 1}} {...subtitleProps}>
        {subtitle}
      </Typography>
    </View>
  );
};
export default InputSubtitle;
