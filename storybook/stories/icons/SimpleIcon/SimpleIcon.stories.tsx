import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import {number, select} from '@storybook/addon-knobs';
import {
  SimpleIcon,
  SimpleIconAlbum,
  defaultIconLightColor,
  SimpleIconName,
  rem,
} from '@npm/mobydick-core';

import CenterView from '../../CenterView';

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

storiesOf('Design System/icons/SimpleIcon', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => <ExampleSimpleIcon />);
