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
    onPressRight={() => MobyDickPopup.openPopup(contentAsk)}
    textLeft={'Cancel'}
    textRight={'More'}
    {...propsFromPopup}
  />
);

const showModalAsk = () => {
  const id = MobyDickPopup.openPopup(ModalAsk, {
    title: 'Delete account?',
    descriptionText: 'You will permanently lose your data',
    textRight: 'Delete',
    textLeft: 'Cancel',
    onPressRight: () => {
      runDeleteProcess(id);
    },
  });
};

const runDeleteProcess = (id: string) => {
  MobyDickPopup.closePopup(id);

  const contentLoadingId = MobyDickPopup.openPopup(contentLoading, {
    onClose: () => {
      MobyDickPopup.closePopup(contentLoadingId);
      clearTimeout(timer);
    },
  });

  const timer = setTimeout(() => {
    MobyDickPopup.closePopup(contentLoadingId);
    MobyDickPopup.openPopup(contentSuccess, {
      onClose: MobyDickPopup.closeAllPopups,
    });
  }, 3000);
};

const PopupModalRef = () => {
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
        onPress={() => MobyDickPopup.openPopup(contentError)}
        style={{marginBottom: 10}}
      />

      <Button
        text={'open modal ask'}
        type={IButtonTypes.secondary}
        style={{marginBottom: 10}}
        onPress={() => {
          MobyDickPopup.openPopup(ModalAsk, {
            title: 'What we need to do?',
            descriptionText: 'Take your time...',
            textRight: 'Open more',
            textLeft: 'Cancel',
            onPressRight: showModalAsk,
            overlayStyle: {},
          });
        }}
      />

      <Button
        text={'open more modal case'}
        type={IButtonTypes.secondary}
        style={{marginBottom: 10}}
        onPress={() => {
          MobyDickPopup.openPopup(contentAsk, {
            overlayStyle: {backgroundColor: 'rgba(0,0,0,0.8)'},
          });
        }}
      />
    </>
  );
};

export default PopupModalRef;
