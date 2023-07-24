import {ComponentStoryObj, Meta} from '@storybook/react-native';
import React, {useCallback} from 'react';

import ExampleActionSheet, {
  IStoryProps,
  IViewActionSheet,
} from './ExampleActionSheet';

import {
  Button,
  IButtonSize,
  iconNames,
  usePopups,
  View,
} from '@lad-tech/mobydick-core';

const ActionSheetPopupExample = (storyProps: IStoryProps) => {
  const popupContext = usePopups();

  const onPress = useCallback(() => {
    popupContext.openPopup({
      Content: props => <ExampleActionSheet {...props} {...storyProps} />,
    });
  }, [popupContext, storyProps]);
  return (
    <View>
      <Button text={'Нажми'} onPress={onPress} size={IButtonSize.large} />
    </View>
  );
};

const meta: Meta<typeof ActionSheetPopupExample> = {
  title: 'Core/Popup',
  component: ActionSheetPopupExample,
};

type Story = ComponentStoryObj<typeof ActionSheetPopupExample>;

export const ActionSheet = {
  args: {
    leftIconName: 'icon-settings',
    isShowLeftIcon: true,
    viewActionSheets: IViewActionSheet.defaultActions,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    leftIconName: {
      options: iconNames,
      control: {
        type: 'select',
      },
    },
    viewActionSheets: {
      options: Object.values(IViewActionSheet),
      control: {
        type: 'select',
      },
    },
    isShowLeftIcon: {
      options: iconNames,
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

export default meta;
