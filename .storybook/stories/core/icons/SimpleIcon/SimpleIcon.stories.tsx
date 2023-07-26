import React, {useState} from 'react';
import {Meta, StoryObj} from '@storybook/react-native';

import {
  defaultIconLightColor,
  rem,
  SimpleIcon as SimpleIconLib,
  SimpleIconAlbum,
  SimpleIconName,
} from '@lad-tech/mobydick-core';

const ExampleSimpleIcon = ({size, color}: {size: number; color: string}) => {
  const [name, setName] = useState<SimpleIconName>('icon-image');
  return (
    <>
      <SimpleIconLib
        style={{marginBottom: rem(40)}}
        name={name}
        size={size}
        color={color}
      />
      <SimpleIconAlbum onPress={setName} />
    </>
  );
};
type Story = StoryObj<typeof ExampleSimpleIcon>;

const meta: Meta<typeof ExampleSimpleIcon> = {
  title: 'Core/icons',
  component: ExampleSimpleIcon,
};

export const SimpleIcon = {
  args: {
    size: 200,
    color: defaultIconLightColor.IconBase,
  },
  argTypes: {
    color: {
      control: {type: 'color'},
    },
  },
} satisfies Story;

export default meta;
