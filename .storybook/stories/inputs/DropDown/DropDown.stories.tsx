import React from 'react';
import {Dimensions} from 'react-native';

import CenterView from '../../CenterView';

import ExampleArrayOfStrings from './ExampleArrayOfStrings';
import ExampleArrayOfObjects from './ExampleArrayOfObjects';

import {PopupsProvider, ScrollView, View} from '@lad-tech/mobydick-core';

const {height} = Dimensions.get('window');

export default {
  title: 'Design System/Inputs/DropDown',

  decorators: [
    getStory => (
      <PopupsProvider>
        <CenterView>
          <ScrollView>
            <View style={{height: height * 2}}>
              <View style={{marginTop: height / 1.3}}>{getStory()}</View>
            </View>
          </ScrollView>
        </CenterView>
      </PopupsProvider>
    ),
  ],
};

export const BasicArrayOfStrings = () => <ExampleArrayOfStrings />;

BasicArrayOfStrings.story = {
  name: 'basic array of strings',
};

export const ArrayOfObjects = () => <ExampleArrayOfObjects />;

ArrayOfObjects.story = {
  name: 'array of objects',
};
