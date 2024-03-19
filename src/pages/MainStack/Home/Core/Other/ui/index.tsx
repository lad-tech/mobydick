import {ScrollView, useStyles} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {DotsWidget} from 'widgets/Core/Other/ui/DotsWidget';

const OtherScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <ScrollView contentContainerStyle={[styles.container, {flex: undefined}]}>
      <DotsWidget />
    </ScrollView>
  );
};

export default OtherScreen;
