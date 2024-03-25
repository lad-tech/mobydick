import {ScrollView, useStyles} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {ActionSheetWidget} from 'widgets/Core/Popup/ui/ActionSheetWidget';
import {ModalsWidget} from 'widgets/Core/Popup/ui/ModalsWidget';
import {SnackbarWidget} from 'widgets/Core/Popup/ui/SnackbarWidget';
import {TooltipWidget} from 'widgets/Core/Popup/ui/TooltipWidget';
import {ModalWidget} from 'widgets/Core/Popup/ui/ModalWidget';

const PopupScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <ScrollView contentContainerStyle={[styles.container, {flex: undefined}]}>
      <ActionSheetWidget />
      <ModalsWidget />
      <SnackbarWidget />
      <TooltipWidget />
      <ModalWidget />
    </ScrollView>
  );
};

export default PopupScreen;
