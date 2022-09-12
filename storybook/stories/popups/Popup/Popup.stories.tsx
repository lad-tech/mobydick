import React, {useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button, ISize} from '@npm/mobydick-cta';
import {usePopups} from '@npm/mobydick-popups';
import {View} from '@npm/mobydick-core';

import CenterView from '../../CenterView';

import ExampleModal from './ExampleModal';
import ExampleSnackbar from './ExampleSnackbar';
import ExampleActionSheet from './ExampleActionSheet';
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
  const popupContext = usePopups();
  const [pageY, setPageY] = useState(0);

  const openPopup = () => {
    popupContext.openPopup({
      id: 'TOOLTIP_POPUP_ID',
      Content: propsFromPopup => (
        <ExampleTooltip
          {...propsFromPopup}
          overlayStyle={{
            justifyContent: undefined,
            backgroundColor: 'transparent',
          }}
          pageY={pageY}
        />
      ),
    });
  };
  return (
    <Button
      onLayout={e =>
        setPageY(e.nativeEvent.layout.y + e.nativeEvent.layout.height)
      }
      text={'What is it?'}
      onPress={openPopup}
    />
  );
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
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Modal', () => <PopupExample />)
  .add('Snackbar', () => <SnackbarPopupExample />)
  .add('Action sheet', () => <ActionSheetPopupExample />)

  .add('Tooltip', () => <PopupTooltipExample />);
