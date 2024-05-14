import {ScrollView, useStyles} from '@shared/ui';
import getScreenStyles from '@shared/styles/getScreenStyles';
import InputsWidget from '@widgets/Core/Inputs/ui/InputsWidget';

const InputsScreen = () => {
  const [styles] = useStyles(getScreenStyles);
  return (
    <ScrollView
      contentContainerStyle={[styles.container, {flex: undefined}]}
      showsVerticalScrollIndicator={false}>
      <InputsWidget />
    </ScrollView>
  );
};

export default InputsScreen;
