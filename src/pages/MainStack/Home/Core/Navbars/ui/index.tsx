import {ScrollView} from '@/shared/ui';
import {TabsWidget} from '@/widgets/Core/Navbars/ui/TabsWidget';
import {PanelHeaderWidget} from '@/widgets/Core/Navbars/ui/PanelHeaderWidget';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const NavbarsScreen = () => {
  return (
    <SafeAreaContainer>
      <ScrollView>
        <TabsWidget />
        <PanelHeaderWidget />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default NavbarsScreen;
