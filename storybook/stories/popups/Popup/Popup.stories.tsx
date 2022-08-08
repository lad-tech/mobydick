import React, {useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button} from '@npm/mobydick-cta';
import {PopupsProvider, usePopups} from '@npm/mobydick-popups';

import CenterView from '../../CenterView';

import ExampleModal from './ExampleModal';
import ExampleTooltip from './ExampleTooltip';

const PopupExample = () => {
  const popupContext = usePopups();
  const [popupCount, setPopupCount] = useState(0);

  const onPress = () => {
    const newCount = popupCount + 1;

    setPopupCount(newCount);

    popupContext.openPopup({
      Content: ExampleModal,
    });
  };
  return <Button text={'Open Popup'} onPress={onPress} />;
};

const PopupTooltipExample = () => {
  const [isVisible, setVisible] = useState(false);
  const onClose = () => setVisible(!isVisible);
  //пока не удалось подключить через popupContext
  return (
    <ExampleTooltip isVisible={isVisible} onClose={onClose}>
      <Button text={'What is it?'} onPress={onClose} />
    </ExampleTooltip>
  );
};

storiesOf('Design System/Popups/Popup', module)
  .addDecorator(getStory => (
    <PopupsProvider>
      <CenterView>{getStory()}</CenterView>
    </PopupsProvider>
  ))
  .add('basic', () => <PopupExample />)
  .add('Tooltip', () => <PopupTooltipExample />);
