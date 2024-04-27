import {KeyboardAwareScrollView, useStyles} from '@shared/ui';
import getScreenStyles from '@shared/styles/getScreenStyles';
import {Inputs} from '@widgets/KeyboardAware/Inputs';

export const KeyboardAwareScrollViewWithTabsScreen = () => {
  const [styles] = useStyles(getScreenStyles);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.container, {flex: undefined}]}>
      <Inputs />
    </KeyboardAwareScrollView>
  );
};
