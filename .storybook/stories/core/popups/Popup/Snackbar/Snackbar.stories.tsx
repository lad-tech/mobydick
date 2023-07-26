import {ComponentStoryObj, Meta} from '@storybook/react-native';
import React, {useCallback} from 'react';

import selectFont from '../../../../../utils/selectFont';

import ExampleSnackbar, {IExampleSnackbarStoryProps} from './ExampleSnackbar';

import {
  Button,
  IButtonSize,
  IPosition,
  usePopups,
  View,
} from '@lad-tech/mobydick-core';

const SnackbarPopupExample = (storyProps: IExampleSnackbarStoryProps) => {
  const popupContext = usePopups();

  const onPress = useCallback(() => {
    popupContext.openPopup({
      Content: props => <ExampleSnackbar {...storyProps} {...props} />,
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

const meta: Meta<typeof SnackbarPopupExample> = {
  title: 'Core/Popup',
  component: SnackbarPopupExample,
};

type Story = ComponentStoryObj<typeof SnackbarPopupExample>;

export const Snackbar = {
  args: {
    showIcon: true,
    title: 'Подборка добавлена',
    snackbarFont: 'Regular-Contrast-XS',
    textButton: 'Поделиться',
    showRightButton: true,
    position: IPosition.bottom,
  },
  argTypes: {
    snackbarFont: {
      options: selectFont,
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
