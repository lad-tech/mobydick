import {Meta, StoryObj} from '@storybook/react-native';

import ChatExample from './ChatExample';

const meta: Meta<typeof ChatExample> = {
  title: 'Core',
  component: ChatExample,
};

type Story = StoryObj<typeof ChatExample>;

export const Chat = {
  args: {
    placeholder: 'Сообщение',
    disabled: false,
    isShowOneIcon: true,
    isShowTwoIcon: true,
    isShowPictureMe: true,
    isShowPictureNotMe: false,
    messageOne: 'Я хочу спать',
    messageTwo:
      'Ура! Я могу еще чем-то помочь? Если нет, заверши, пожалуйста, консультацию. Всего хорошего!Ура!',
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    isShowOneIcon: {
      control: {
        type: 'boolean',
      },
    },
    isShowTwoIcon: {
      control: {
        type: 'boolean',
      },
    },
    isShowPictureMe: {
      control: {
        type: 'boolean',
      },
    },
    isShowPictureNotMe: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

export default meta;
