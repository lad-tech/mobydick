import {KeyboardAwareScrollView, View} from '@/shared/ui';
import {Inputs} from '@/widgets/KeyboardAware/Inputs';
import SafeAreaContainerInsideTabs from '@/shared/ui/SafeAreaContainerInsideTabs';

export const KeyboardAwareScrollViewWithTabsScreen = () => {
  return (
    <SafeAreaContainerInsideTabs>
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView isEdgeToEdgeEnabled>
          <Inputs />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaContainerInsideTabs>
  );
};
