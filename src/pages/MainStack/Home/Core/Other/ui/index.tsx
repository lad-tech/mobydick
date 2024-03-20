import {ScrollView, useStyles} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {DotsWidget} from 'widgets/Core/Other/ui/DotsWidget';
import {AvatarWidget} from 'widgets/Core/Other/ui/AvatarWidget';
import {BadgeWidget} from 'widgets/Core/Other/ui/BadgeWidget';

const OtherScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <ScrollView contentContainerStyle={[styles.container, {flex: undefined}]}>
      <DotsWidget />
      <AvatarWidget />
      <BadgeWidget />
    </ScrollView>
  );
};

export default OtherScreen;
