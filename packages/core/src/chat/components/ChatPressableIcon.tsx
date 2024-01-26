import {StyleSheet} from 'react-native';

import TouchableOpacity from '../../basic/components/TouchableOpacity/TouchableOpacity';
import SimpleIcon, {SimpleIconName} from '../../styles/icons/font/SimpleIcon';
import useStyles from '../../styles/theme/hooks/useStyles';
import rem from '../../styles/spaces/rem';
import {IThemeContext} from '../../styles';
import useTheme from '../../styles/theme/hooks/useTheme';
import {ITouchableOpacityProps} from '../../basic';

interface IChatPressableIcon extends ITouchableOpacityProps {
  name: SimpleIconName;
  color?: string;
  backgroundColor?: string;
}
const ChatPressableIcon = (props: IChatPressableIcon) => {
  const {colors} = useTheme();
  const {
    name,
    color = colors.IconBase,
    backgroundColor = colors.BgAccent,
    ...otherProps
  } = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: backgroundColor}]}
      {...otherProps}>
      <SimpleIcon name={name} color={color} />
    </TouchableOpacity>
  );
};

const stylesCreate = ({spaces}: IThemeContext) =>
  StyleSheet.create({
    container: {
      width: rem(38),
      height: rem(38),
      borderRadius: spaces.Space8,
      marginLeft: spaces.Space6,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default ChatPressableIcon;
