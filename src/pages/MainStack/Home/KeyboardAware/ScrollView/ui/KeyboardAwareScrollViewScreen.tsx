import {KeyboardAwareScrollView} from '@/shared/ui';
import {Inputs} from '@/widgets/KeyboardAware/Inputs';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

export const KeyboardAwareScrollViewScreen = () => {
  return (
    <SafeAreaContainer>
      <KeyboardAwareScrollView isEdgeToEdgeEnabled>
        <Inputs />
      </KeyboardAwareScrollView>
    </SafeAreaContainer>
  );
};
