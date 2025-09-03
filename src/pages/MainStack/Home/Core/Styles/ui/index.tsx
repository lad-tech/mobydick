import {FlatList, useStyles, View} from '@/shared/ui';
import getScreenStyles from '@/shared/styles/getScreenStyles';
import {ShadowWidget} from '@/widgets/Core/Styles/ui/ShadowWidget';
import {SimpleIconWidget} from '@/widgets/Core/Styles/ui/SimpleIconWidget';
import {TablerIconWidget} from '@/widgets/Core/Styles/ui/TablerIconWidget';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const renderItem = () => <View />;

const StylesScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <SafeAreaContainer>
      <FlatList
        data={[]}
        contentContainerStyle={[styles.container, {flex: undefined}]}
        renderItem={renderItem}
        ListFooterComponent={
          <>
            <ShadowWidget />
            <TablerIconWidget />
            <SimpleIconWidget />
          </>
        }
      />
    </SafeAreaContainer>
  );
};

export default StylesScreen;
