import {ComponentStoryObj, Meta} from '@storybook/react-native';
import React, {useCallback} from 'react';

import selectFont from '../../../../../utils/selectFont';

import ExampleSnackbar, {IExampleSnackbarStoryProps} from './ExampleSnackbar';

import {
  Button,
  IButtonSize,
  IPosition,
  MobyDickPopup,
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

  const showSnackBar = () => {
    const handelClose = () => {
      MobyDickPopup.closePopup(ExampleSnackbarId);
      MobyDickPopup.openPopup(ExampleSnackbar, {
        ...storyProps,
        position: IPosition.top,
      });
    };

    const ExampleSnackbarId = MobyDickPopup.openPopup(ExampleSnackbar, {
      ...storyProps,
      title: 'Show more tips?',
      textButton: 'Show more',
      onClose: handelClose,
    });
  };

  return (
    <View>
      <Button
        text={'Нажми и появится выплывашка'}
        onPress={onPress}
        size={IButtonSize.fixed}
        style={{marginBottom: 10}}
      />
      <Button
        text={'Нажми и появится еще одна всплывашка'}
        onPress={showSnackBar}
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
