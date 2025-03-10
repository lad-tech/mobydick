import {useState} from 'react';

import {
  createStyles,
  Dots,
  TouchableOpacity,
  Typography,
  useStyles,
  View,
} from '@/shared/ui';
import Header from '@/shared/ui/Header';

export const DotsWidget = () => {
  const [styles] = useStyles(stylesFn);
  const [activeDot, setActiveDot] = useState(0);
  const length = 9;

  const onPressIncrease = () => {
    if (activeDot !== length - 1) {
      setActiveDot(curr => curr + 1);
    }
  };

  const onPressDecrease = () => {
    if (activeDot !== 0) {
      setActiveDot(curr => curr - 1);
    }
  };

  return (
    <View>
      <Header title={'Dots'} />
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressDecrease}>
          <Typography font={'Regular-Secondary-XS'}>
            Press me to decrease dot
          </Typography>
        </TouchableOpacity>
        <Dots length={length} activeDot={activeDot} />
        <TouchableOpacity onPress={onPressIncrease}>
          <Typography font={'Regular-Secondary-XS'}>
            Press me to increase dot
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesFn = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space16,
    alignItems: 'center',
  },
}));
