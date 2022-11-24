import {
  ModalErrorHorizontalButtons,
  ModalErrorOneButton,
  ModalErrorVerticalButtons,
  usePopups,
} from '@npm/mobydick-popups';
import React, {useState} from 'react';
import {View} from '@npm/mobydick-core';
import {Button, IButtonTypes} from '@npm/mobydick-cta';

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

  const onPressModalErrorVerticalButtons = () => {
    popupContext.openPopup({
      Content: propsFromPopup => (
        <ModalErrorVerticalButtons
          {...propsFromPopup}
          title={'Ошибка при оформлении'}
          descriptionText={'Помогите'}
        />
      ),
    });
  };

  const onPressModalErrorOneButton = () => {
    popupContext.openPopup({
      Content: propsFromPopup => (
        <ModalErrorOneButton
          {...propsFromPopup}
          title={'Ошибка при оформлении'}
          descriptionText={'Помогите'}
        />
      ),
    });
  };

  const onPressModalErrorHorizontalButtons = () => {
    popupContext.openPopup({
      Content: propsFromPopup => (
        <ModalErrorHorizontalButtons
          {...propsFromPopup}
          title={'Ошибка при оформлении'}
          descriptionText={'Помогите'}
          onPressLeft={() => console.log('onPressLeft')}
          onPressRight={() => console.log('onPressRight')}
          typeLeft={IButtonTypes.tertiary}
          typeRight={IButtonTypes.destructive}
          textLeft={'Отмена'}
          textRight={'Выйти'}
        />
      ),
    });
  };

  return (
    <View>
      <Button
        text={'Open Modal'}
        onPress={onPress}
        style={{marginBottom: 10}}
      />
      <Button
        text={'Open Modal Error One Button'}
        onPress={onPressModalErrorOneButton}
        style={{marginBottom: 10}}
      />
      <Button
        text={'Open Modal Error Vertical Buttons'}
        onPress={onPressModalErrorVerticalButtons}
        style={{marginBottom: 10}}
      />
      <Button
        text={'Open Modal Error Horizontal Buttons'}
        onPress={onPressModalErrorHorizontalButtons}
      />
    </View>
  );
};

export default PopupModalExample;
