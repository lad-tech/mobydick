import {KeyboardAwareScrollView, useStyles} from 'shared/ui';
import {Inputs} from 'widgets/KeyboardAware/Inputs';
import getScreenStyles from 'shared/styles/getScreenStyles';

export const KeyboardAwareScrollViewScreen = () => {
  const [styles] = useStyles(getScreenStyles);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.container, {flex: undefined}]}>
      <Inputs />
    </KeyboardAwareScrollView>
  );
};
