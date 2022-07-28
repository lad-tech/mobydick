import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {DropDown} from '@npm/mobydick-inputs';
import {array, number, select, text} from '@storybook/addon-knobs';
import {PopupsProvider} from '@npm/mobydick-popups';
import {ScrollView, View} from '@npm/mobydick-core';
import {height} from '@npm/mobydick-inputs/src/components/DropDown/constants';
import {iconNames, SimpleIcon, SimpleIconName} from '@npm/mobydick-styles';

import CenterView from '../../CenterView';

// тут лютые отступы и ScrollView, чтобы потестить DropDown в боевых условиях <3
storiesOf('Design System/Inputs/DropDown', module)
  .addDecorator(getStory => (
    <PopupsProvider>
      <CenterView>
        <ScrollView>
          <View style={{height: height * 2}}>
            <View style={{marginTop: height / 1.3}}>{getStory()}</View>
          </View>
        </ScrollView>
      </CenterView>
    </PopupsProvider>
  ))
  .add('basic', () => (
    <DropDown
      selectedItem={text('SelectedItem', '')}
      placeholder={text('Placeholder', 'Выберите язык')}
      title={text('title', 'Язык')}
      list={array('list', [
        'Русский',

        'English',

        'Deutsch',

        'Japanese',

        'Bolgarian',
      ])}
      onPress={console.log}
      rightIcon={
        <SimpleIcon
          name={
            select('icon name', iconNames, 'icon-arrow-down') as SimpleIconName
          }
        />
      }
      dropDownHeight={number('Height', 50)}
      dropDownWidth={number('Width', 250)}
    />
  ));
