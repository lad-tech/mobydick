import {useStyles, View} from '@shared/ui';
import getScreenStyles from '@shared/styles/getScreenStyles';
import {SliderWidget} from '@widgets/Core/Controls/ui/SliderWidget';
import {ControlListWidget} from '@widgets/Core/Controls/ui/ControlListWidget';
import {SwipeWidget} from '@widgets/Core/Controls/ui/SwipeWidget';

const ControlsScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <ControlListWidget />
      <SliderWidget />
      <SwipeWidget />
    </View>
  );
};

export default ControlsScreen;
