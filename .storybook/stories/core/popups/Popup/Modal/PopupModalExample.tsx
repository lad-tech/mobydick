import React, {useCallback, useState} from 'react';

import ExampleModal, {IExampleModalStoryProps} from './ExampleModal';

import {
  Button,
  IContentProps,
  ModalAsk,
  ModalError,
  ModalLoading,
  ModalSuccess,
  usePopups,
  View,
} from '@lad-tech/mobydick-core';

const contentSuccess = (propsFromPopup: IContentProps) => (
  <ModalSuccess
    {...propsFromPopup}
    title={'Success'}
    descriptionText={'This is a success message'}
  />
);
const contentLoading = (propsFromPopup: IContentProps) => (
  <ModalLoading
    {...propsFromPopup}
    title={'Loading...'}
    descriptionText={'Please wait'}
    buttonText={'Cancel'}
  />
);

const contentError = (propsFromPopup: IContentProps) => (
  <ModalError
    {...propsFromPopup}
    title={'Error...'}
    descriptionText={'This is a error message'}
    buttonText={'Cancel'}
  />
);

const onPressRight = () => console.log('onPressRight');

const contentAsk = (propsFromPopup: IContentProps) => (
  <ModalAsk
    {...propsFromPopup}
    title={'Delete account?'}
    descriptionText={'You will permanently lose your data'}
    onPressRight={onPressRight}
    textLeft={'Cancel'}
    textRight={'Delete'}
  />
);
const PopupModalExample = (storyProps: IExampleModalStoryProps) => {
  const popupContext = usePopups();
  const [popupCount, setPopupCount] = useState(0);

  const onPress = useCallback(() => {
    const newCount = popupCount + 1;

    setPopupCount(newCount);

    popupContext.openPopup({
      Content: props => <ExampleModal {...props} {...storyProps} />,
    });
  }, [popupContext, popupCount, storyProps]);

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
