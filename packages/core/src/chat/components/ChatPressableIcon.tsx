import React from 'react';
import {StyleSheet} from 'react-native';

import TouchableOpacity from '../../basic/components/TouchableOpacity/TouchableOpacity';
import SimpleIcon, {SimpleIconName} from '../../styles/icons/font/SimpleIcon';
import useStyles from '../../styles/theme/hooks/useStyles';
import rem from '../../styles/spaces/rem';
import {IThemeContext} from '../../styles';
import useTheme from '../../styles/theme/hooks/useTheme';

interface IChatPressableIcon {
  name: SimpleIconName;
  color?: string;
  onPress: () => void;
  backgroundColor?: string;
}
const ChatPressableIcon = (props: IChatPressableIcon) => {
  const {colors} = useTheme();
  const {
    name,
    onPress,
    color = colors.IconBase,
    backgroundColor = colors.BgAccent,
  } = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: backgroundColor}]}>
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
