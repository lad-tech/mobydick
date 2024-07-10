import {
  createStyles,
  IStatusState,
  Typography,
  useStyles,
  View,
} from '@shared/ui';
import Header from '@shared/ui/Header';
import Rating from '@lad-tech/mobydick-core/src/other/components/Rating/Rating';

export const RatingWidget = () => {
  const [styles] = useStyles(stylesFn);

  return (
    <View>
      <Header title={'Rating'} />
      <View style={styles.container}>
        <Typography>Style</Typography>
        <View style={styles.row}>
          <Rating
            onChange={() => {}}
            count={5}
            iconSize={25}
            iconStyle={styles.rating}
            fillColor={IStatusState.red}
          />
        </View>
        <Typography>Default</Typography>
        <View style={styles.row}>
          <Rating onChange={() => {}} count={5} />
        </View>
      </View>
    </View>
  );
};

const stylesFn = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space16,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: spaces.Space16,
  },
  rating: {
    margin: spaces.Space1,
  },
}));
