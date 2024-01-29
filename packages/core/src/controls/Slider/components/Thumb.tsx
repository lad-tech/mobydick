import {Animated, StyleSheet} from 'react-native';

import useStyles from '../../../styles/hooks/useStyles';
import {IThemeContext} from '../../../styles';

const Thumb = ({size}: {size: Animated.Value}) => {
  const [styles] = useStyles(stylesCreate);

  return (
    <Animated.View
      style={[
        styles.root,
        {
          width: size,
          height: size,
          borderRadius: size,
        },
      ]}
    />
  );
};

const stylesCreate = ({colors, spaces}: IThemeContext) => {
  return StyleSheet.create({
    root: {
      borderWidth: spaces.Space2,
      borderColor: colors.IconMuted,
      backgroundColor: colors.BgPrimary,
    },
  });
};

export default Thumb;
