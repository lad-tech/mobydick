import {KeyboardAwareScrollView} from '@/shared/ui';
import {Inputs} from '@/widgets/KeyboardAware/Inputs';
import {BottomComponent} from '@/widgets/KeyboardAware/Bottom';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

export const KeyboardAwareScrollViewWithBottomScreen = () => {
  return (
    <SafeAreaContainer>
      <KeyboardAwareScrollView
        isEdgeToEdgeEnabled
        BottomComponent={<BottomComponent />}>
        <Inputs />
      </KeyboardAwareScrollView>
    </SafeAreaContainer>
  );
};
