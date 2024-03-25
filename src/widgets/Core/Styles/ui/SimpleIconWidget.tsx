import {useState} from 'react';

import {SimpleIconAlbum, Typography, View} from 'shared/ui';
import Header from 'shared/ui/Header';

export const SimpleIconWidget = () => {
  const [simpleIconName, setSimpleIconName] = useState('');
  return (
    <View>
      <Header title={'SimpleIcons'} />
      <SimpleIconAlbum onPress={setSimpleIconName} horizontal={true} />
      <Typography>{simpleIconName}</Typography>
    </View>
  );
};
