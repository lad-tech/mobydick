import React, {useCallback, useState} from 'react';
import {text} from '@storybook/addon-knobs';

import ExampleModal from './ExampleModal';

import {
  ModalError,
  ModalLoading,
  ModalSuccess,
  usePopups,
  View,
  Button,
  ModalAsk,
} from '@npm/mobydick-core';

const PopupModalExample = () => {
  const popupContext = usePopups();
  const [popupCount, setPopupCount] = useState(0);

  const onPress = useCallback(() => {
    const newCount = popupCount + 1;

    setPopupCount(newCount);

    popupContext.openPopup({
      Content: ExampleModal,
    });
  }, [popupContext, popupCount]);

  const onPressModalSuccess = useCallback(() => {
    popupContext.openPopup({
      Content: propsFromPopup => (
        <ModalSuccess
          {...propsFromPopup}
          title={'Success'}
          descriptionText={text(
            'Description text success message',
            'This is a success message',
          )}
        />
      ),
    });
  }, [popupContext]);

  const onPressModalLoading = () => {
    popupContext.openPopup({
      Content: propsFromPopup => (
        <ModalLoading
          {...propsFromPopup}
          title={'Loading...'}
          descriptionText={text(
            'Description text loading message',
            'Please wait',
          )}
          buttonText={'Cancel'}
        />
      ),
    });
  };
  const onPressModalError = useCallback(() => {
    popupContext.openPopup({
      Content: propsFromPopup => (
        <ModalError
          {...propsFromPopup}
          title={'Error...'}
          descriptionText={text(
            'Description text error message',
            'This is a error message',
          )}
          buttonText={'Cancel'}
        />
      ),
    });
  }, [popupContext]);

  const onPressModalAsk = useCallback(() => {
    popupContext.openPopup({
      Content: propsFromPopup => (
        <ModalAsk
          {...propsFromPopup}
          title={'Delete account?'}
          descriptionText={text(
            'Description text error message',
            'You will permanently lose your data',
          )}
          onPressRight={() => console.log('onPressRight')}
          textLeft={'Cancel'}
          textRight={'Delete'}
        />
      ),
    });
  }, [popupContext]);

  return (
    <View>
      <Button
        text={'Open modal constructor'}
        onPress={onPress}
        style={{marginBottom: 10}}
      />
      <Button
        text={'Open modal loading'}
        onPress={onPressModalLoading}
        style={{marginBottom: 10}}
      />
      <Button
        text={'Open modal success'}
        onPress={onPressModalSuccess}
        style={{marginBottom: 10}}
      />
      <Button
        text={'Open modal error'}
        onPress={onPressModalError}
        style={{marginBottom: 10}}
      />
      <Button text={'Open modal ask'} onPress={onPressModalAsk} />
    </View>
  );
};

export default PopupModalExample;
