import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {PopupsProvider} from '@npm/mobydick-popups';
import {ScrollView, View} from '@npm/mobydick-core';
import {Dimensions} from 'react-native';

import CenterView from '../../CenterView';

import ExampleArrayOfObjects from './ExampleArrayOfObjects';
import ExampleArrayOfStrings from './ExampleArrayOfStrings';
const {height} = Dimensions.get('window');

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
  .add('basic array of strings', () => <ExampleArrayOfStrings />)
  .add('basic array of objects', () => <ExampleArrayOfObjects />);
