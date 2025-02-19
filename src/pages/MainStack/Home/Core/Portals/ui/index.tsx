import {useState} from 'react';

import {
  Button,
  MobyDickPortal,
  ModalAsk,
  ModalLoading,
  Portal,
  View,
} from '@/shared/ui';

export const PortalsScreen = () => {
  const [isShow, setIsShow] = useState(false);

  const [text, setText] = useState('BIBA');

  const toggle = () => {
    setIsShow(!isShow);
    setTimeout(() => {
      setText('BOBA');
    }, 2000);
    MobyDickPortal.mountPortal(
      'portalRoot',
      `nested`,
      <ModalAsk
        onPressRight={toggle}
        onClose={() => MobyDickPortal.unmountPortal('portalRoot', `nested`)}
        id={'BIBA'}
        title={text}
        descriptionText={'Проверяем обновление'}
      />,
    );
  };
  return (
    <View>
      <Button onPress={toggle} />
      {isShow && (
        <Portal>
          <ModalLoading
            onClose={toggle}
            id={'BIBA1'}
            title={text}
            descriptionText={'Проверяем обновление'}
          />
        </Portal>
      )}
    </View>
  );
};
