import {ScrollView} from '@/shared/ui';
import {DotsWidget} from '@/widgets/Core/Other/ui/DotsWidget';
import {AvatarWidget} from '@/widgets/Core/Other/ui/AvatarWidget';
import {BadgeWidget} from '@/widgets/Core/Other/ui/BadgeWidget';
import {StatusWidget} from '@/widgets/Core/Other/ui/StatusWidget';
import {CollapsibleWidget} from '@/widgets/Core/Other/ui/CollapsibleWidget';
import {CrossedTextWidget} from '@/widgets/Core/Other/ui/CrossedTextWidget';
import {CarouselWidget} from '@/widgets/Core/Other/ui/CarouselWidget';
import {RatingWidget} from '@/widgets/Core/Other/ui/RatingWidget';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const OtherScreen = () => {
  return (
    <SafeAreaContainer>
      <ScrollView>
        <DotsWidget />
        <AvatarWidget />
        <BadgeWidget />
        <StatusWidget />
        <RatingWidget />
        <CrossedTextWidget />
        <CollapsibleWidget />
        <CarouselWidget />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default OtherScreen;
