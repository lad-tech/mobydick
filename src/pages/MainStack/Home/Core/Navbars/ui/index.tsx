import {ScrollView, useStyles} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {TabsWidget} from 'widgets/Core/Navbars/ui/TabsWidget';
import {PanelHeaderWidget} from 'widgets/Core/Navbars/ui/PanelHeaderWidget';
const NavbarsScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {flex: undefined, paddingHorizontal: 0},
      ]}>
      <TabsWidget />
      <PanelHeaderWidget />
    </ScrollView>
  );
};

export default NavbarsScreen;
