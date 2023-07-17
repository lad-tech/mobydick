import React, {RefObject, useCallback, useRef} from 'react';
import {storiesOf} from '@storybook/react-native';

import CenterView from '../../CenterView';

import ExampleSnackbar from './ExampleSnackbar';
import ExampleActionSheet from './ExampleActionSheet';
import ExampleTooltip from './ExampleTooltip';
import PopupModalExample from './PopupModalExample';

import {
  Button,
  IButtonSize,
  ITouchableOpacity,
  View,
  usePopups,
} from '@lad-tech/mobydick-core';

const PopupTooltipExample = () => {
  const popupContext = usePopups();
  const viewRef = useRef<ITouchableOpacity>(null);
  const viewRef2 = useRef<ITouchableOpacity>(null);
  const viewRef3 = useRef<ITouchableOpacity>(null);
  const viewRef4 = useRef<ITouchableOpacity>(null);
  const viewRef5 = useRef<ITouchableOpacity>(null);

  const openPopup = useCallback((ref: RefObject<ITouchableOpacity>) => {
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
  }, []);

  const onPressSmallBtnLeft = useCallback(
    () => openPopup(viewRef),
    [openPopup],
  );
  const onPressLargeBtnLeft = useCallback(
    () => openPopup(viewRef2),
    [openPopup],
  );
  const onPressBtnCenter = useCallback(() => openPopup(viewRef3), [openPopup]);
  const onPressLargeBtnCenter = useCallback(
    () => openPopup(viewRef4),
    [openPopup],
  );
  const onPressSmallBtnCenter = useCallback(
    () => openPopup(viewRef5),
    [openPopup],
  );

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
        text={'small button left'}
        onPress={onPressSmallBtnLeft}
        style={{margin: 10}}
      />
      <Button
        ref={viewRef2}
        size={IButtonSize.large}
        text={'large button left'}
        onPress={onPressLargeBtnLeft}
        style={{marginBottom: 10}}
      />
      <Button
        ref={viewRef3}
        text={'button center'}
        onPress={onPressBtnCenter}
        style={{marginBottom: 10}}
      />
      <Button
        ref={viewRef4}
        size={IButtonSize.large}
        text={'large button center'}
        onPress={onPressLargeBtnCenter}
        style={{marginBottom: 10, alignSelf: 'center'}}
      />
      <Button
        ref={viewRef5}
        size={IButtonSize.small}
        text={'small button center'}
        onPress={onPressSmallBtnCenter}
        style={{marginBottom: 10, alignSelf: 'center'}}
      />
    </View>
  );
};

const SnackbarPopupExample = () => {
  const popupContext = usePopups();

  const onPress = useCallback(() => {
    popupContext.openPopup({
      Content: ExampleSnackbar,
    });
  }, []);

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

  const onPress = useCallback(() => {
    popupContext.openPopup({
      Content: ExampleActionSheet,
    });
  }, []);
  return (
    <View>
      <Button text={'Нажми'} onPress={onPress} size={IButtonSize.large} />
    </View>
  );
};

storiesOf('Design System/Popups/Popup', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Modal', () => <PopupModalExample />)
  .add('Snackbar', () => <SnackbarPopupExample />)
  .add('Action sheet', () => <ActionSheetPopupExample />)
  .add('Tooltip', () => <PopupTooltipExample />);
