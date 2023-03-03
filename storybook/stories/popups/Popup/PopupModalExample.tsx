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
  IContentProps,
} from '@npm/mobydick-core';

const contentSuccess = (propsFromPopup: IContentProps) => (
  <ModalSuccess
    {...propsFromPopup}
    title={'Success'}
    descriptionText={text(
      'Description text success message',
      'This is a success message',
    )}
  />
);
const contentLoading = (propsFromPopup: IContentProps) => (
  <ModalLoading
    {...propsFromPopup}
    title={'Loading...'}
    descriptionText={text('Description text loading message', 'Please wait')}
    buttonText={'Cancel'}
  />
);

const contentError = (propsFromPopup: IContentProps) => (
  <ModalError
    {...propsFromPopup}
    title={'Error...'}
    descriptionText={text(
      'Description text error message',
      'This is a error message',
    )}
    buttonText={'Cancel'}
  />
);

const onPressRight = () => console.log('onPressRight');

const contentAsk = (propsFromPopup: IContentProps) => (
  <ModalAsk
    {...propsFromPopup}
    title={'Delete account?'}
    descriptionText={text(
      'Description text error message',
      'You will permanently lose your data',
    )}
    onPressRight={onPressRight}
    textLeft={'Cancel'}
    textRight={'Delete'}
  />
);
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
      Content: contentSuccess,
    });
  }, [popupContext]);

  const onPressModalLoading = useCallback(() => {
    popupContext.openPopup({
      Content: contentLoading,
    });
  }, [popupContext]);

  const onPressModalError = useCallback(() => {
    popupContext.openPopup({
      Content: contentError,
    });
  }, [popupContext]);

  const onPressModalAsk = useCallback(() => {
    popupContext.openPopup({
      Content: contentAsk,
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
