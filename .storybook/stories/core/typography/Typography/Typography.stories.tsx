import React from 'react';
import {ComponentStoryObj, Meta} from '@storybook/react-native';

import {
  defaultTextLightColor,
  ITextColors,
  TEXT,
  TFontColor,
  TFontSize,
  TFontWeight,
  Typography as TypographyLib,
} from '@lad-tech/mobydick-core';

const textColorKeys = Object.keys(
  defaultTextLightColor,
) as (keyof ITextColors)[];

const fontColors = textColorKeys.map(item => item.slice(TEXT.length));

const TypographyExample = ({
  fontWeight,
  fontColor,
  fontSize,
  text,
}: {
  fontWeight: TFontWeight;
  fontColor: TFontColor;
  fontSize: TFontSize;
  text: string;
}) => (
  <TypographyLib font={`${fontWeight}-${fontColor}-${fontSize}`}>
    {text}
  </TypographyLib>
);

const meta: Meta<typeof TypographyExample> = {
  title: 'Core',
  component: TypographyExample,
};

type Story = ComponentStoryObj<typeof TypographyExample>;

export const Typography = {
  args: {
    fontWeight: TFontWeight.Regular,
    fontColor: 'Primary',
    fontSize: TFontSize.H1,
    text: 'Ваш текст',
  },
  argTypes: {
    fontWeight: {
      options: Object.values(TFontWeight),
      control: {
        type: 'select',
      },
    },
    fontColor: {
      options: Object.values(fontColors),
      control: {
        type: 'select',
      },
    },
    fontSize: {
      options: Object.values(TFontWeight),
      control: {
        type: 'select',
      },
    },
  },
} satisfies Story;

export default meta;
