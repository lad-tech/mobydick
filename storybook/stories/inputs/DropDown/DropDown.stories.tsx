import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Dimensions} from 'react-native';

import CenterView from '../../CenterView';

import ExampleArrayOfStrings from './ExampleArrayOfStrings';
import ExampleArrayOfObjects from './ExampleArrayOfObjects';

import {PopupsProvider, ScrollView, View} from '@lad-tech/mobydick-core';

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
  .add('array of objects', () => <ExampleArrayOfObjects />);
