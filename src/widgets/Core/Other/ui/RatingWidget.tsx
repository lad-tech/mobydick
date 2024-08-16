import {useState} from 'react';

import {
  createStyles,
  IStatusState,
  Typography,
  useStyles,
  View,
  Rating,
} from '@shared/ui';
import Header from '@shared/ui/Header';

export const RatingWidget = () => {
  const [styles] = useStyles(stylesFn);
  const [rate, setRate] = useState(0);

  return (
    <View>
      <Header title={'Rating'} />
      <View style={styles.container}>
        <Typography>Style</Typography>
        <View style={styles.row}>
          <Rating
            setCurrentRate={setRate}
            count={5}
            iconSize={25}
            iconStyle={styles.rating}
            fillColor={IStatusState.red}
            currentRate={rate}
          />
        </View>
        <Typography>Default</Typography>
        <View style={styles.row}>
          <Rating setCurrentRate={setRate} count={5} currentRate={rate} />
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
