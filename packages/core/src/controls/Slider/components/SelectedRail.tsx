import {Animated} from 'react-native';

import View from '../../../basic/components/View/View';
import useStyles from '../../../styles/hooks/useStyles';
import stylesCreate from '../stylesCreate';

const SelectedRail = ({
  selectedRailStyle,
}: {
  selectedRailStyle: {
    left: Animated.Value;
    right: Animated.Value;
  };
}) => {
  const [styles] = useStyles(stylesCreate);
  return (
    <Animated.View style={[styles.selectedRailContainer, selectedRailStyle]}>
      <View style={styles.selectedRail} />
    </Animated.View>
  );
};

export default SelectedRail;
