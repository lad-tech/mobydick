import {createStyles, Typography, useStyles, View} from 'shared/ui';

export const BlockView = ({item, width}: {item: number; width: number}) => {
  const [styles] = useStyles(stylesFn);

  return (
    <View style={[styles.container, {width: width}]}>
      <Typography>{item}</Typography>
    </View>
  );
};

const stylesFn = createStyles(({colors}) => ({
  container: {
    backgroundColor: colors.BgAccent,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
