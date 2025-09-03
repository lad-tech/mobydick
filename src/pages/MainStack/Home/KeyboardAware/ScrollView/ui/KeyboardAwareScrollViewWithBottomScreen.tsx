import {KeyboardAwareScrollView, View} from '@/shared/ui';
import {Inputs} from '@/widgets/KeyboardAware/Inputs';
import {BottomComponent} from '@/widgets/KeyboardAware/Bottom';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

export const KeyboardAwareScrollViewWithBottomScreen = () => {
  return (
    <SafeAreaContainer>
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView
          isEdgeToEdgeEnabled
          BottomComponent={<BottomComponent />}>
          <Inputs />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaContainer>
  );
};
