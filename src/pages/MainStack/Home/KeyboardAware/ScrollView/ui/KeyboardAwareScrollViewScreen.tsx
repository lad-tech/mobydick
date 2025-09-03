import {KeyboardAwareScrollView, View} from '@/shared/ui';
import {Inputs} from '@/widgets/KeyboardAware/Inputs';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

export const KeyboardAwareScrollViewScreen = () => {
  return (
    <SafeAreaContainer>
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView isEdgeToEdgeEnabled>
          <Inputs />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaContainer>
  );
};
