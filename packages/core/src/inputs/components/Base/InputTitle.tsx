import {TextStyle} from 'react-native';

import View from '../../../basic/components/View/View';
import {
  IStyledTextProps,
  TypographyLegacy,
  TypographyLegacyProp,
} from '../../../typography';
import useTheme from '../../../styles/hooks/useTheme';

interface IInputTitle {
  title: string;
  titleProps?: IStyledTextProps | undefined;
  titleStyle?: TextStyle | TextStyle[] | undefined;
  titleFont?: TypographyLegacyProp | undefined;
  required?: boolean | undefined;
}
const InputTitle = (props: IInputTitle) => {
  const {title, titleProps, titleFont, titleStyle, required} = props;
  const {colors} = useTheme();
  const font = titleFont || titleProps?.font || 'SemiBold-Secondary-S';

  return (
    <View style={{flexDirection: 'row'}}>
      <TypographyLegacy font={font} style={titleStyle} {...titleProps}>
        {title}
      </TypographyLegacy>
      {required && (
        <TypographyLegacy font={font} style={{color: colors.TextError}}>
          {'*'}
        </TypographyLegacy>
      )}
    </View>
  );
};

export default InputTitle;
