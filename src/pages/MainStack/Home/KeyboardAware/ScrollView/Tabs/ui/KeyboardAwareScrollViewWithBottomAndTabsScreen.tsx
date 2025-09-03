import {KeyboardAwareScrollView} from '@/shared/ui';
import {Inputs} from '@/widgets/KeyboardAware/Inputs';
import {BottomComponent} from '@/widgets/KeyboardAware/Bottom';
import SafeAreaContainerInsideTabs from '@/shared/ui/SafeAreaContainerInsideTabs';

export const KeyboardAwareScrollViewWithBottomAndTabsScreen = () => {
  return (
    <SafeAreaContainerInsideTabs>
      <KeyboardAwareScrollView
        isEdgeToEdgeEnabled
        BottomComponent={<BottomComponent />}>
        <Inputs />
      </KeyboardAwareScrollView>
    </SafeAreaContainerInsideTabs>
  );
};
