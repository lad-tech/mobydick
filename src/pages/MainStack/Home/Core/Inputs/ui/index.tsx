import {ScrollView, useStyles} from 'shared/ui';
import InputsWidget from 'widgets/Core/Inputs/ui/InputsWidget';
import getScreenStyles from 'shared/styles/getScreenStyles';

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
