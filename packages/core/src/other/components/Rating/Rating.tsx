import {FC} from 'react';
import {View} from 'react-native';

import {createStyles, px} from '../../../styles';
import useStyles from '../../../styles/hooks/useStyles';

import Star from './components/Star';
import {TRating} from './types';

const Rating: FC<TRating> = ({
  setCurrentRate,
  count,
  iconStyle,
  iconSize = px(40),
  fillColor,
  currentRate = 0,
  disabled,
}) => {
  const [styles] = useStyles(stylesCreate);
  const ratingCount = Array(count).fill(0);

  const handleRating = (startId: number) => {
    if (!setCurrentRate) {
      return;
    }
    if (currentRate === startId) {
      setCurrentRate(currentRate + 1);
      return;
    }
    setCurrentRate(startId);
  };

  const stars = ratingCount.map((_, index) => (
    <Star
      key={'rating' + index}
      filled={index <= currentRate - 1}
      starId={index}
      setRating={handleRating}
      currentSelected={currentRate}
      iconStyle={iconStyle}
      iconSize={iconSize}
      fillColor={fillColor}
      disabled={disabled}
    />
  ));

  return <View style={styles.container}>{stars}</View>;
};

const stylesCreate = createStyles(_ => ({
  container: {
    flexDirection: 'row',
  },
}));

export default Rating;
