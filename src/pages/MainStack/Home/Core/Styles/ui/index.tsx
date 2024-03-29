import {FlatList, useStyles, View} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {ShadowWidget} from 'widgets/Core/Styles/ui/ShadowWidget';
import {SimpleIconWidget} from 'widgets/Core/Styles/ui/SimpleIconWidget';

const renderItem = () => <View />;

const StylesScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <FlatList
      data={[]}
      contentContainerStyle={[styles.container, {flex: undefined}]}
      renderItem={renderItem}
      ListFooterComponent={
        <>
          <ShadowWidget />
          <SimpleIconWidget />
        </>
      }
    />
  );
};

export default StylesScreen;
