import {ScrollView, useStyles} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {ActionSheetWidget} from 'widgets/Core/Popup/ui/ActionSheetWidget';
import {ModalWidget} from 'widgets/Core/Popup/ui/ModalWidget';
import {SnackbarWidget} from 'widgets/Core/Popup/ui/SnackbarWidget';
import {TooltipWidget} from 'widgets/Core/Popup/ui/TooltipWidget';

const PopupScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <ScrollView contentContainerStyle={[styles.container, {flex: undefined}]}>
      <ActionSheetWidget />
      <ModalWidget />
      <SnackbarWidget />
      <TooltipWidget />
    </ScrollView>
  );
};

export default PopupScreen;
