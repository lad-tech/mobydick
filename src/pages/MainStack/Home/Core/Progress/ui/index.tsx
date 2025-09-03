import {ScrollView, useStyles} from '@/shared/ui';
import getScreenStyles from '@/shared/styles/getScreenStyles';
import {IndicatorWidget} from '@/widgets/Core/Progress/ui/IndicatorWidget';
import {SpinnerWidget} from '@/widgets/Core/Progress/ui/SpinnerWidget';
import {PanelSpinnerWidget} from '@/widgets/Core/Progress/ui/PanelSpinnerWidget';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const ProgressScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <SafeAreaContainer>
      <ScrollView contentContainerStyle={[styles.container, {flex: undefined}]}>
        <IndicatorWidget />
        <SpinnerWidget />
        <PanelSpinnerWidget />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default ProgressScreen;
