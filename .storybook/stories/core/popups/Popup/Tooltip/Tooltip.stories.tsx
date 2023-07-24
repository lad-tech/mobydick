import React, {RefObject, useCallback, useRef} from 'react';
import {ComponentStoryObj, Meta} from '@storybook/react-native';

import ExampleTooltip, {
  IExampleTooltipStoryProps,
  ITypeTooltip,
} from './ExampleTooltip';

import {
  Button,
  IButtonSize,
  IPlacement,
  IPosition,
  ITouchableOpacity,
  usePopups,
  View,
} from '@lad-tech/mobydick-core';

const PopupTooltipExample = (storyProps: IExampleTooltipStoryProps) => {
  const popupContext = usePopups();
  const viewRef = useRef<ITouchableOpacity>(null);
  const viewRef2 = useRef<ITouchableOpacity>(null);
  const viewRef3 = useRef<ITouchableOpacity>(null);
  const viewRef4 = useRef<ITouchableOpacity>(null);
  const viewRef5 = useRef<ITouchableOpacity>(null);

  const openPopup = useCallback(
    (ref: RefObject<ITouchableOpacity>) => {
      if (ref.current) {
        popupContext.openPopup({
          id: 'TOOLTIP_POPUP_ID',
          Content: propsFromPopup => (
            <ExampleTooltip
              {...propsFromPopup}
              {...storyProps}
              refCurrent={ref}
              fixedButton={ref === viewRef3}
            />
          ),
        });
      }
    },
    [popupContext, storyProps],
  );

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

const meta: Meta<typeof PopupTooltipExample> = {
  title: 'Core/Popup',
  component: PopupTooltipExample,
};

type Story = ComponentStoryObj<typeof PopupTooltipExample>;

export const PopupTooltip = {
  args: {
    placement: IPlacement.start,
    position: IPosition.top,
    titleText: 'Войдите в приложение, чтобы\nделиться картами и скидками',
    descriptionText: 'Это займет меньше минуты, а\nплюшек станет больше!',
    timeShow: 0,
    isArrow: true,
    textButton: 'Войти',
    viewTooltip: ITypeTooltip.onlyTitle,
  },
  argTypes: {
    placement: {
      options: Object.values(IPlacement),
      control: {
        type: 'select',
      },
    },
    viewTooltip: {
      options: Object.values(ITypeTooltip),
      control: {
        type: 'select',
      },
    },
    position: {
      options: Object.values(IPosition),
      control: {
        type: 'select',
      },
    },
  },
} satisfies Story;

export default meta;
