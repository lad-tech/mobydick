import {Button, createStyles, Typography, useStyles, View} from '@/shared/ui';

export const BottomComponent = () => {
  const [styles] = useStyles(style);

  return (
    <View style={styles.container}>
      <Typography>BottomComponents</Typography>
      <Button text={'Submit'} />
    </View>
  );
};

const style = createStyles(({colors, spaces}) => ({
  container: {
    backgroundColor: colors.BgPrimary,
    borderTopWidth: spaces.Space1,
    borderColor: colors.BorderSoft,
    alignItems: 'center',
  },
}));
