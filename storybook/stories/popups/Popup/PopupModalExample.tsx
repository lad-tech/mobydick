import {
  ModalError,
  ModalLoading,
  ModalSuccess,
  usePopups,
  View,
  Button,
} from '@npm/mobydick-core';
import React, {useState} from 'react';
import {text} from '@storybook/addon-knobs';

import ExampleModal from './ExampleModal';

const PopupModalExample = () => {
  const popupContext = usePopups();
  const [popupCount, setPopupCount] = useState(0);

  const onPress = () => {
    const newCount = popupCount + 1;

    setPopupCount(newCount);

    popupContext.openPopup({
      Content: ExampleModal,
    });
  };

  const onPressModalSuccess = () => {
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
  };

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

  const onPressModalError = () => {
    popupContext.openPopup({
      Content: propsFromPopup => (
        <ModalError
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
  };

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
      <Button text={'Open modal error'} onPress={onPressModalError} />
    </View>
  );
};

export default PopupModalExample;
