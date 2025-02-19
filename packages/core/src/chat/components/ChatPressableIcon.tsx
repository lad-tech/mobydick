import TouchableOpacity from '../../basic/components/TouchableOpacity/TouchableOpacity';
import SimpleIcon, {SimpleIconName} from '../../styles/icons/font/SimpleIcon';
import useStyles from '../../styles/hooks/useStyles';
import useTheme from '../../styles/hooks/useTheme';
import {ITouchableOpacityProps} from '../../basic';
import {createStyles} from '../../styles';
import px from '../../styles/utils/px';

interface IChatPressableIcon extends ITouchableOpacityProps {
  name: SimpleIconName;
  color?: string;
  backgroundColor?: string;
}
const ChatPressableIcon = (props: IChatPressableIcon) => {
  const {colors} = useTheme();
  const {
    name,
    color = colors.IconAccent,
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

const stylesCreate = createStyles(({spaces}) => ({
  container: {
    width: px(38),
    height: px(38),
    borderRadius: spaces.Space8,
    marginLeft: spaces.Space6,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default ChatPressableIcon;
