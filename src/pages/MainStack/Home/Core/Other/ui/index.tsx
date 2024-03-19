import {ScrollView, useStyles} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {DotsWidget} from 'widgets/Core/Other/ui/DotsWidget';
import {AvatarWidget} from 'widgets/Core/Other/ui/AvatarWidget';

const OtherScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <ScrollView contentContainerStyle={[styles.container, {flex: undefined}]}>
      <DotsWidget />
      <AvatarWidget />
    </ScrollView>
  );
};

export default OtherScreen;
