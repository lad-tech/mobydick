import React from 'react';
import {Animated} from 'react-native';

import View from '../../../basic/components/View/View';
import useStyles from '../../../styles/theme/hooks/useStyles';
import stylesCreate from '../stylesCreate';

import SelectedRail from './SelectedRail';

const Rail = ({
  selectedRailStyle,
  thumbWidth,
}: {
  selectedRailStyle: {
    left: Animated.Value;
    right: Animated.Value;
  };
  thumbWidth: number;
}) => {
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={[styles.railsContainer, {marginHorizontal: thumbWidth / 2}]}>
      <View style={styles.rail} />
      <SelectedRail selectedRailStyle={selectedRailStyle} />
    </View>
  );
};

export default Rail;
