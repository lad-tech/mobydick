import {KeyboardAwareScrollView, useStyles} from 'shared/ui';
import {Inputs} from 'widgets/KeyboardAware/Inputs';
import {BottomComponent} from 'widgets/KeyboardAware/Bottom';
import getScreenStyles from 'shared/styles/getScreenStyles';

export const KeyboardAwareScrollViewWithBottomScreen = () => {
  const [styles] = useStyles(getScreenStyles);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.container, {flex: undefined}]}
      BottomComponent={<BottomComponent />}>
      <Inputs />
    </KeyboardAwareScrollView>
  );
};
