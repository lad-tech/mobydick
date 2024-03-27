import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {
  createStyles,
  IChartTransition,
  ISharedChartState,
  Typography,
  useStyles,
} from 'shared/ui';

interface IProps {
  period: string;
  state: ISharedChartState;
  transition: IChartTransition;
  index: number;
}

const RenderSectionItem = ({period, state, transition, index}: IProps) => {
  const [styles, {colors}] = useStyles(createStyleFn);
  const animationStyles = useAnimatedStyle(() => {
    const {current, next} = state.value;

    if (index !== current && index !== next) {
      return {backgroundColor: colors.BgAccent};
    }

    if (index === current && index === next) {
      return {backgroundColor: colors.BgAccentHard};
    }

    return {
      backgroundColor: interpolateColor(
        transition.value,
        index === next ? [0, 1] : [1, 0],
        [colors.BgAccent, colors.BgAccentHard],
      ),
    };
  });

  return (
    <Animated.View style={[styles.container, animationStyles]}>
      <Typography style={styles.text}>{period}</Typography>
    </Animated.View>
  );
};

const createStyleFn = createStyles(({spaces}) => ({
  container: {
    flexGrow: 1,
    padding: spaces.Space8,
    borderRadius: spaces.Space16,
    margin: spaces.Space4,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
}));

export default RenderSectionItem;
