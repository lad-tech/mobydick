import React, {RefObject, useRef, useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button, IButtonSize} from '@npm/mobydick-cta';
import {usePopups} from '@npm/mobydick-popups';
import {ITouchableOpacity, View} from '@npm/mobydick-core';

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
  const viewRef = useRef<ITouchableOpacity>(null);
  const viewRef2 = useRef<ITouchableOpacity>(null);
  const viewRef3 = useRef<ITouchableOpacity>(null);
  const viewRef4 = useRef<ITouchableOpacity>(null);
  const viewRef5 = useRef<ITouchableOpacity>(null);

  const openPopup = (ref: RefObject<ITouchableOpacity>) => {
    if (ref.current) {
      popupContext.openPopup({
        id: 'TOOLTIP_POPUP_ID',
        Content: propsFromPopup => (
          <ExampleTooltip
            {...propsFromPopup}
            refCurrent={ref}
            fixedButton={ref === viewRef3}
          />
        ),
      });
    }
  };

  return (
    <View
      style={{
        margin: 20,
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
      <Button
        ref={viewRef}
        size={IButtonSize.small}
        text={'What is it?'}
        onPress={() => openPopup(viewRef)}
        style={{margin: 10}}
      />
      <Button
        ref={viewRef2}
        size={IButtonSize.large}
        text={'What is it1?'}
        onPress={() => openPopup(viewRef2)}
        style={{marginBottom: 10}}
      />
      <Button
        ref={viewRef3}
        text={'What is it3?'}
        onPress={() => openPopup(viewRef3)}
        style={{marginBottom: 10}}
      />
      <Button
        ref={viewRef4}
        size={IButtonSize.large}
        text={'What is it4?'}
        onPress={() => openPopup(viewRef4)}
        style={{marginBottom: 10, alignSelf: 'center'}}
      />
      <Button
        ref={viewRef5}
        size={IButtonSize.small}
        text={'What is it5?'}
        onPress={() => openPopup(viewRef5)}
        style={{marginBottom: 10, alignSelf: 'center'}}
      />
    </View>
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
        size={IButtonSize.fixed}
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
      <Button text={'Нажми'} onPress={onPress} size={IButtonSize.large} />
    </View>
  );
};
storiesOf('Design System/Popups/Popup', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Modal', () => <PopupExample />)
  .add('Snackbar', () => <SnackbarPopupExample />)
  .add('Action sheet', () => <ActionSheetPopupExample />)

  .add('Tooltip', () => <PopupTooltipExample />);
