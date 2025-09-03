import {SliderWidget} from '@/widgets/Core/Controls/ui/SliderWidget';
import {ControlListWidget} from '@/widgets/Core/Controls/ui/ControlListWidget';
import {SwipeWidget} from '@/widgets/Core/Controls/ui/SwipeWidget';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const ControlsScreen = () => {
  return (
    <SafeAreaContainer>
      <ControlListWidget />
      <SliderWidget />
      <SwipeWidget />
    </SafeAreaContainer>
  );
};

export default ControlsScreen;
