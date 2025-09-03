import {ScrollView} from '@/shared/ui';
import {ButtonWidget} from '@/widgets/Core/CTA/ui/ButtonWidget';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const CTAScreen = () => {
  return (
    <SafeAreaContainer>
      <ScrollView>
        <ButtonWidget />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default CTAScreen;
