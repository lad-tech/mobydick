import {ScrollView, useStyles} from '@/shared/ui';
import getScreenStyles from '@/shared/styles/getScreenStyles';
import InputsWidget from '@/widgets/Core/Inputs/ui/InputsWidget';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const InputsScreen = () => {
  const [styles] = useStyles(getScreenStyles);
  return (
    <SafeAreaContainer>
      <ScrollView
        contentContainerStyle={[styles.container, {flex: undefined}]}
        showsVerticalScrollIndicator={false}>
        <InputsWidget />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default InputsScreen;
