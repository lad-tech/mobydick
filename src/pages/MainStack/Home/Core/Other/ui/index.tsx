import {ScrollView, useStyles} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {DotsWidget} from 'widgets/Core/Other/ui/DotsWidget';
import {AvatarWidget} from 'widgets/Core/Other/ui/AvatarWidget';
import {BadgeWidget} from 'widgets/Core/Other/ui/BadgeWidget';
import {StatusWidget} from 'widgets/Core/Other/ui/StatusWidget';

const OtherScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <ScrollView contentContainerStyle={[styles.container, {flex: undefined}]}>
      <DotsWidget />
      <AvatarWidget />
      <BadgeWidget />
      <StatusWidget />
    </ScrollView>
  );
};

export default OtherScreen;
