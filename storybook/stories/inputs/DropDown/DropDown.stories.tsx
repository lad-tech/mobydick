import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {DropDown} from '@npm/mobydick-inputs';
import {array, text} from '@storybook/addon-knobs';
import {PopupsProvider} from '@npm/mobydick-popups';
import {ScrollView, View} from '@npm/mobydick-core';
import {height} from '@npm/mobydick-inputs/src/components/DropDown/constants';

import CenterView from '../../CenterView';

storiesOf('Design System/Inputs/DropDown', module)
  .addDecorator(getStory => (
    <PopupsProvider>
      <CenterView>
        <ScrollView>
          <View style={{height: height * 2}}>
            <View style={{marginTop: 500}}>{getStory()}</View>
          </View>
        </ScrollView>
      </CenterView>
    </PopupsProvider>
  ))
  .add('basic', () => (
    <DropDown
      selectedItem={text('SelectedItem', '')}
      placeholder={text('Placeholder', 'Выберите язык')}
      title={text('title', 'Название поля')}
      list={array('list', [
        'Русский',

        'English',

        'Deutsch',

        'Japanese',

        'Bolgarian',
      ])}
    />
  ));
