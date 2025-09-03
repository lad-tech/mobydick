import {ScrollView} from '@/shared/ui';
import {ActionSheetWidget} from '@/widgets/Core/Popup/ui/ActionSheetWidget';
import {ModalsWidget} from '@/widgets/Core/Popup/ui/ModalsWidget';
import {SnackbarWidget} from '@/widgets/Core/Popup/ui/SnackbarWidget';
import {TooltipWidget} from '@/widgets/Core/Popup/ui/TooltipWidget';
import {ModalWidget} from '@/widgets/Core/Popup/ui/ModalWidget';
import {PopupBaseWidget} from '@/widgets/Core/Popup/ui/PopupBaseWidget';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const PopupScreen = () => {
  return (
    <SafeAreaContainer>
      <ScrollView>
        <ActionSheetWidget />
        <ModalsWidget />
        <SnackbarWidget />
        <TooltipWidget />
        <ModalWidget />
        <PopupBaseWidget />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default PopupScreen;
