import React, {useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button, ISize} from '@npm/mobydick-cta';
import {PopupsProvider, PopupType, usePopups} from '@npm/mobydick-popups';
import {text} from '@storybook/addon-knobs';
import {Text} from '@npm/mobydick-core';

import CenterView from '../../CenterView';

import ImageModal from './icons/svg/imageModal.svg';

const PopupExample = () => {
  const popupContext = usePopups();
  const [popupCount, setPopupCount] = useState(0);

  const onPress = () => {
    const newCount = popupCount + 1;

    setPopupCount(newCount);

    const pop = {
      // title: text('title', newCount.toString() + 'Нет доступа к камере'),
      type: PopupType.modal,
      isExitIcon: true,
      children: (
        <>
          <ImageModal />
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              lineHeight: 26,
              color: '#20242D',
              paddingHorizontal: 20,
              paddingVertical: 10,
              textAlign: 'center',
            }}>
            {text('Title', ' Нет доступа к камере')}
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 20,
              textAlign: 'center',
              paddingHorizontal: 20,
              fontWeight: '400',
              color: '#444B5A',
              paddingBottom: 20,
            }}>
            {text(
              'Description text',
              'Разрешите доступ к камере в настройках, чтобы сканировать штрихкод или QR-код на картах',
            )}
          </Text>
          <Button
            onPress={() =>
              popupContext.openPopup({
                title: newCount + 'newNested',
                style: {width: 250, position: 'absolute', top: 5},
                children: pop['children'],
                type: PopupType.modal,
              })
            }
            text={'Разрешить доступ'}
            size={ISize.small}
          />
        </>
      ),
    };

    popupContext.openPopup(pop);
  };
  return <Button text={'Open Popup'} onPress={onPress} />;
};

storiesOf('Design System/Popups/Popup', module)
  .addDecorator(getStory => (
    <PopupsProvider>
      <CenterView>{getStory()}</CenterView>
    </PopupsProvider>
  ))
  .add('basic', () => <PopupExample />);
