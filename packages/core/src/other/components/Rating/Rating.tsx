import {FC, useState} from 'react';
import {View} from 'react-native';

import {createStyles, px} from '../../../styles';
import useStyles from '../../../styles/hooks/useStyles';

import Star from './components/Star';
import {TRating} from './types';

const Rating: FC<TRating> = ({
  onChange,
  count,
  iconStyle,
  iconSize = px(40),
  fillColor,
  currentRate = -1,
  disabled,
}) => {
  const [rating, setRating] = useState(currentRate);
  const [styles] = useStyles(stylesCreate);
  const ratingCount = Array(count).fill(0);

  const handleRating = (startId: number) => {
    if (!onChange) {
      return;
    }
    if (rating === startId) {
      setRating(rating - 1);
      onChange(rating);
      return;
    }
    setRating(startId);
    onChange(++startId);
  };

  const stars = ratingCount.map((_, index) => (
    <Star
      key={'rating' + index}
      filled={index <= rating}
      starId={index}
      setRating={handleRating}
      currentSelected={rating}
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
