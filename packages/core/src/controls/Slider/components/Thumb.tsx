import {Animated} from 'react-native';

import useStyles from '../../../styles/hooks/useStyles';
import {createStyles} from '../../../styles';

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

const stylesCreate = createStyles(({spaces, colors}) => ({
  root: {
    borderWidth: spaces.Space2,
    borderColor: colors.IconMuted,
    backgroundColor: colors.BgPrimary,
  },
}));

export default Thumb;
