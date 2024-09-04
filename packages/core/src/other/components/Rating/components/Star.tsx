import {FC, useRef} from 'react';
import {TouchableOpacity, Animated, ViewProps} from 'react-native';

import {Star as StarSVG} from '../../../../styles';
import {TStar} from '../types';
import {LABELS} from '../../../constants';

const Star: FC<TStar & ViewProps> = ({
  filled,
  setRating,
  starIndex,
  iconSize,
  iconStyle,
  fillColor = '#ffd712',
  disabled,
}) => {
  const value = useRef(new Animated.Value(0)).current;

  const interpolated = value.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  const handleRating = () => {
    setRating(starIndex);
    Animated.sequence([
      Animated.timing(value, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(value, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity
      onPress={handleRating}
      accessibilityLabel={`${LABELS.ratingStarButton}${starIndex + 1}`}
      disabled={disabled}>
      <Animated.View style={[iconStyle, {transform: [{scale: interpolated}]}]}>
        <StarSVG
          height={iconSize}
          width={iconSize}
          fill={filled ? fillColor : '#cccccc'}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Star;
