import {FC, useState} from 'react';
import {TouchableOpacity, Animated, ViewProps} from 'react-native';

import {Star as StarSVG} from '../../../../styles';
import {TStar} from '../types';
import {LABELS} from '../../../constants';

const Star: FC<TStar & ViewProps> = ({
  filled,
  setRating,
  starId,
  currentSelected,
  iconSize,
  iconStyle,
  fillColor = '#ffd712',
  disabled,
}) => {
  const value = useState(new Animated.Value(0))[0];

  const scale = () => {
    Animated.sequence([
      Animated.timing(value, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(value, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const interpolated = value.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  const handleRating = (starId: number) => {
    setRating(starId);
    if (!filled || starId != currentSelected) {
      scale();
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handleRating(starId)}
      accessibilityLabel={`${LABELS.ratingStarButton}${starId}`}
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
