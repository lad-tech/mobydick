import {Button, createStyles, Typography, useStyles, View} from '@shared/ui';

export const BottomComponent = () => {
  const [styles] = useStyles(style);
  return (
    <View style={styles.container}>
      <Typography>BottomComponents</Typography>
      <Button text={'Submit'} />
    </View>
  );
};

const style = createStyles(({shadows, colors, spaces}) => ({
  container: {
    backgroundColor: colors.BgPrimary,
    ...shadows.large,
    alignItems: 'center',
    padding: spaces.Space12,
  },
}));
