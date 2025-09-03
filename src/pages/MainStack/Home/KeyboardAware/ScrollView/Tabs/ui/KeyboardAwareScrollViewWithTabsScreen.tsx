import {KeyboardAwareScrollView} from '@/shared/ui';
import {Inputs} from '@/widgets/KeyboardAware/Inputs';
import SafeAreaContainerInsideTabs from '@/shared/ui/SafeAreaContainerInsideTabs';

export const KeyboardAwareScrollViewWithTabsScreen = () => {
  return (
    <SafeAreaContainerInsideTabs>
      <KeyboardAwareScrollView isEdgeToEdgeEnabled>
        <Inputs />
      </KeyboardAwareScrollView>
    </SafeAreaContainerInsideTabs>
  );
};
