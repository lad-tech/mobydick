import {ComponentStoryObj, Meta} from '@storybook/react-native';

import PanelHeaderExample, {IPanelHeader} from './PanelHeaderExample';

import {iconNames} from '@lad-tech/mobydick-core';

const meta: Meta<typeof PanelHeaderExample> = {
  title: 'Core/Navbars',
  component: PanelHeaderExample,
};

type Story = ComponentStoryObj<typeof PanelHeaderExample>;

export const PanelHeader = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    isRightView: false,
    isLeftView: false,
    isTwoLeftIcon: false,
    isTwoRightIcon: false,
    panelHeader: IPanelHeader.icon,
    leftIcon: 'icon-calendar',
    rightIcon: 'icon-logout',
  },
  argTypes: {
    panelHeader: {
      options: Object.values(IPanelHeader),
      control: {
        type: 'select',
      },
    },
    leftIcon: {
      options: iconNames,
      control: {
        type: 'select',
      },
    },
    rightIcon: {
      options: iconNames,
      control: {
        type: 'select',
      },
    },
  },
} satisfies Story;

export default meta;
