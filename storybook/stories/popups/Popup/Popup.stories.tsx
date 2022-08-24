import React, {useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button, ISize} from '@npm/mobydick-cta';
import {PopupsProvider, usePopups} from '@npm/mobydick-popups';
import {View} from '@npm/mobydick-core';

import CenterView from '../../CenterView';

import ExampleModal from './ExampleModal';
import ExampleSnackbar from './ExampleSnackbar';
import ExampleActionSheet from './ExampleActionSheet';

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

const SnackbarPopupExample = () => {
  const popupContext = usePopups();

  const onPress = () => {
    popupContext.openPopup({
      Content: ExampleSnackbar,
    });
  };
  return (
    <View>
      <Button
        text={'Нажми и появится выплывашка'}
        onPress={onPress}
        size={ISize.fixed}
      />
    </View>
  );
};

const ActionSheetPopupExample = () => {
  const popupContext = usePopups();

  const onPress = () => {
    popupContext.openPopup({
      Content: ExampleActionSheet,
    });
  };
  return (
    <View>
      <Button text={'Нажми'} onPress={onPress} size={ISize.large} />
    </View>
  );
};
storiesOf('Design System/Popups/Popup', module)
  .addDecorator(getStory => (
    <PopupsProvider>
      <CenterView>{getStory()}</CenterView>
    </PopupsProvider>
  ))
  .add('Modal', () => <PopupExample />)
  .add('Snackbar', () => <SnackbarPopupExample />)
  .add('Action sheet', () => <ActionSheetPopupExample />);
