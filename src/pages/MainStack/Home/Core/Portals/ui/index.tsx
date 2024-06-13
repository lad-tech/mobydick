import {View} from 'react-native';
import {useState} from 'react';

import {Button, ModalLoading, Portal} from '@lad-tech/mobydick-core';

export const PortalsScreen = () => {
  const [isShow, setIsShow] = useState(false);

  const [text, setText] = useState('BIBA');

  const toogle = () => {
    setIsShow(show => !show);
    setTimeout(() => {
      setText('BOBA');
    }, 2000);
  };
  return (
    <View>
      <Button onPress={toogle} />
      {isShow && (
        <Portal>
          <ModalLoading
            onClose={toogle}
            id={'BIBA'}
            title={text}
            descriptionText={'Проверяем обновление'}
          />
        </Portal>
      )}
    </View>
  );
};
