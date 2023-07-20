import React, {useState} from 'react';
import {number, select} from '@storybook/addon-knobs';

import CenterView from '../../CenterView';

import {
  SimpleIcon,
  SimpleIconAlbum,
  defaultIconLightColor,
  SimpleIconName,
  rem,
} from '@lad-tech/mobydick-core';

const ExampleSimpleIcon = () => {
  const [name, setName] = useState<SimpleIconName>('icon-image');
  return (
    <>
      <SimpleIcon
        style={{marginBottom: rem(40)}}
        name={name}
        size={number('size', 200)}
        color={select(
          'color',
          defaultIconLightColor,
          defaultIconLightColor.IconBase,
        )}
      />
      <SimpleIconAlbum onPress={setName} />
    </>
  );
};

export default {
  title: 'Design System/icons/SimpleIcon',
  decorators: [getStory => <CenterView>{getStory()}</CenterView>],
};

export const Basic = () => <ExampleSimpleIcon />;

Basic.story = {
  name: 'basic',
};
