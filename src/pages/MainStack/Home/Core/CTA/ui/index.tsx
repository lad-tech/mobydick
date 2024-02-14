import {ScrollView, useStyles} from 'shared/ui';
import getScreenStyles from 'pages/lib/getScreenStyles';
import {ButtonWidget} from 'widgets/Core/CTA/ui/ButtonWidget';

const CTAScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <ScrollView contentContainerStyle={[styles.container, {flex: undefined}]}>
      <ButtonWidget />
    </ScrollView>
  );
};

export default CTAScreen;
