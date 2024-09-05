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

  const handleRating = (starIndex: number) => {
    const newRating = starIndex + 1;
    if (currentRate === newRating) {
      setCurrentRate(newRating - 1);
      return;
    }
    setCurrentRate(newRating);
  };

  const stars = ratingCount.map((_, index) => (
    <Star
      key={'rating' + index}
      filled={index <= currentRate - 1}
      starIndex={index}
      setRating={handleRating}
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
