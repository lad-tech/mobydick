import {KeyboardAwareScrollView, useStyles} from '@/shared/ui';
import getScreenStyles from '@/shared/styles/getScreenStyles';
import {Inputs} from '@/widgets/KeyboardAware/Inputs';
import {BottomComponent} from '@/widgets/KeyboardAware/Bottom';

export const KeyboardAwareScrollViewWithBottomAndTabsScreen = () => {
  const [styles] = useStyles(getScreenStyles);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.container, {flex: undefined}]}
      BottomComponent={<BottomComponent />}>
      <Inputs />
    </KeyboardAwareScrollView>
  );
};
