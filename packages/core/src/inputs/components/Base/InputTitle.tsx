import {TextStyle} from 'react-native';

import View from '../../../basic/components/View/View';
import {
  IStyledTextProps,
  Typography,
  TypographyProp,
} from '../../../typography';
import useTheme from '../../../styles/hooks/useTheme';

interface IInputTitle {
  title: string;
  titleProps?: IStyledTextProps | undefined;
  titleStyle?: TextStyle | TextStyle[] | undefined;
  titleFont?: TypographyProp | undefined;
  required?: boolean | undefined;
}
const InputTitle = (props: IInputTitle) => {
  const {title, titleProps, titleFont, titleStyle, required} = props;
  const {colors} = useTheme();
  const font = titleFont || titleProps?.font || 'Medium-Tertiary-XS';

  return (
    <View style={{flexDirection: 'row'}}>
      <Typography font={font} style={titleStyle} {...titleProps}>
        {title}
      </Typography>
      {required && (
        <Typography font={font} style={{color: colors.TextError}}>
          {'*'}
        </Typography>
      )}
    </View>
  );
};

export default InputTitle;
