import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {number, select} from '@storybook/addon-knobs';
import {defaultIconLightColor} from '@npm/mobydick-styles';

import SimpleIconAlbum from '../../../../packages/styles/src/icons/font/SimpleIconAlbum';
import SimpleIcon, {
  iconNames,
  SimpleIconName,
} from '../../../../packages/styles/src/icons/font/SimpleIcon';
import CenterView from '../../CenterView';

storiesOf('Design System/icons/SimpleIcon', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <>
      <SimpleIcon
        style={{marginBottom: 40}}
        name={select('icon name', iconNames, 'icon-image') as SimpleIconName}
        size={number('size', 200)}
        color={select(
          'color',
          defaultIconLightColor,
          defaultIconLightColor.IconBase,
        )}
      />
      <SimpleIconAlbum />
    </>
  ));
