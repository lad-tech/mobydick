import {ComponentStoryObj, Meta} from '@storybook/react-native';
import React from 'react';
import {Dimensions} from 'react-native';

import selectFont from '../../../utils/selectFont';

import ExampleSearch from './Search/ExampleSearch';
import ExampleArrayOfStrings from './DropDown/ExampleArrayOfStrings';
import ExampleArrayOfObjects from './DropDown/ExampleArrayOfObjects';

import {
  iconNames,
  IInputsTypes,
  PopupsProvider,
  rem,
  ScrollView,
  View,
} from '@lad-tech/mobydick-core';

const {height} = Dimensions.get('window');

const meta: Meta<typeof ExampleSearch> = {
  title: 'Core/inputs/DropDown',
  component: ExampleArrayOfStrings,
  decorators: [
    getStory => {
      return (
        <PopupsProvider>
          <ScrollView>
            <View style={{height: height * 2}}>
              <View style={{marginTop: height / 1.3}}>{getStory()}</View>
            </View>
          </ScrollView>
        </PopupsProvider>
      );
    },
  ],
};

type Story = ComponentStoryObj<typeof ExampleArrayOfStrings>;

export const DropDownArrayOfStrings = {
  args: {
    subtitleIconName: 'icon-arrow-down',
    title: 'Язык',
    placeholder: 'Выберите язык',
    list: ['Русский', 'English', 'Deutsch', 'Japanese', 'Bulgarian'],
    type: IInputsTypes.default,
    subtitle: 'Подпись',
    showSubtitleIcon: false,
    required: false,
    iconName: 'icon-arrow-down',
    buttonHeight: rem(40),
    buttonWidth: rem(300),
    listWidth: rem(300),
    buttonFont: 'Regular-Muted-M',
    titleFont: 'Medium-Tertiary-XS',
    flatlistFont: 'Regular-Secondary-M',
    buttonTextFontChosen: 'Medium-Primary-M',
    flatListTextFontPressed: 'Medium-Primary-M',
  },
  argTypes: {
    flatListTextFontPressed: {
      options: selectFont,
      control: {
        type: 'select',
      },
    },
    list: {
      control: {
        separator: ',',
        control: {type: 'array'},
      },
    },
    buttonTextFontChosen: {
      options: selectFont,
      control: {
        type: 'select',
      },
    },
    flatlistFont: {
      options: selectFont,
      control: {
        type: 'select',
      },
    },
    buttonFont: {
      options: selectFont,
      control: {
        type: 'select',
      },
    },
    titleFont: {
      options: selectFont,
      control: {
        type: 'select',
      },
    },
    subtitleIconName: {
      options: iconNames,
      control: {
        type: 'select',
      },
    },
    iconName: {
      options: iconNames,
      control: {
        type: 'select',
      },
    },
    type: {
      options: Object.values(IInputsTypes),
      control: {
        type: 'select',
      },
    },
    showSubtitleIcon: {
      control: {
        type: 'boolean',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;
export const DropDownArrayOfObjects = {
  render: args => <ExampleArrayOfObjects {...args} />,
  args: {
    title: 'Язык',
    placeholder: 'Выберите язык',
    type: IInputsTypes.default,
    required: false,
    buttonHeight: rem(40),
    buttonWidth: rem(300),
    listWidth: rem(300),
  },
  argTypes: {
    type: {
      options: Object.values(IInputsTypes),
      control: {
        type: 'select',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies ComponentStoryObj<typeof ExampleArrayOfObjects>;

export default meta;
