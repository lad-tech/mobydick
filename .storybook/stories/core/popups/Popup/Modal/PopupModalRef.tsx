import React from 'react';

import {
  Button,
  IButtonTypes,
  IContentProps,
  MobyDickPopup,
  ModalAsk,
  ModalError,
  ModalLoading,
  ModalSuccess,
  usePopup,
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

const contentAsk = (propsFromPopup: IContentProps) => (
  <ModalAsk
    title={'Delete account?'}
    descriptionText={'You will permanently lose your data'}
    onPressRight={() => MobyDickPopup.openPopup({Content: contentAsk})}
    textLeft={'Cancel'}
    textRight={'More'}
    {...propsFromPopup}
  />
);

const showModalAsk = () => {
  const id = MobyDickPopup.openPopup({
    Content: ModalAsk,
    props: {
      title: 'Delete account?',
      descriptionText: 'You will permanently lose your data',
      textRight: 'Delete',
      textLeft: 'Cancel',
      onPressRight: () => {
        runDeleteProcess(id);
      },
    },
  });
};

const runDeleteProcess = (id: string) => {
  MobyDickPopup.closePopup(id);

  const contentLoadingId = MobyDickPopup.openPopup({
    Content: contentLoading,
    props: {
      onClose: () => {
        MobyDickPopup.closePopup(contentLoadingId);
        clearTimeout(timer);
      },
    },
  });

  const timer = setTimeout(() => {
    MobyDickPopup.closePopup(contentLoadingId);
    MobyDickPopup.openPopup({
      Content: contentSuccess,
      props: {onClose: MobyDickPopup.closeAllPopups},
    });
  }, 3000);
};

const PopupModalRef = () => {
  const askPopup = usePopup(contentAsk);

  return (
    <>
      <Button
        text={'Open modal ask'}
        onPress={showModalAsk}
        type={IButtonTypes.secondary}
        style={{marginBottom: 10, marginTop: 10}}
      />

      <Button
        text={'Open modal error'}
        type={IButtonTypes.secondary}
        onPress={() => MobyDickPopup.openPopup({Content: contentError})}
        style={{marginBottom: 10}}
      />

      <Button
        text={'open modal ask'}
        type={IButtonTypes.secondary}
        style={{marginBottom: 10}}
        onPress={() => {
          MobyDickPopup.openPopup({
            Content: ModalAsk,
            props: {
              title: 'What we need to do?',
              descriptionText: 'Take your time...',
              textRight: 'Open more',
              textLeft: 'Cancel',
              onPressRight: showModalAsk,
            },
          });
        }}
      />

      <Button
        text={'open more modal case'}
        type={IButtonTypes.secondary}
        style={{marginBottom: 10}}
        onPress={() => {
          MobyDickPopup.openPopup({
            Content: contentAsk,
          });
        }}
      />

      <Button
        text={'open more vie usePopup'}
        type={IButtonTypes.secondary}
        style={{marginBottom: 10}}
        onPress={() => {
          askPopup.open();
        }}
      />
    </>
  );
};

export default PopupModalRef;
