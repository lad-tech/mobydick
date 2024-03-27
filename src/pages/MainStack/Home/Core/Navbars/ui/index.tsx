import {ScrollView, useStyles} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {TabsWidget} from 'widgets/Core/Navbars/ui/TabsWidget';
const NavbarsScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <ScrollView contentContainerStyle={[styles.container, {flex: undefined}]}>
      <TabsWidget />
    </ScrollView>
  );
};

export default NavbarsScreen;
