import React from 'react';

import CenterView from '../CenterView';

import ExampleSearch from './Search/ExampleSearch';
import ExampleInput from './InputField/ExampleInput';
import ExampleVerification from './Verification/ExampleVerification';

export default {
  title: 'Design System/Inputs',
  decorators: [getStory => <CenterView>{getStory()}</CenterView>],
};

export const Search = () => <ExampleSearch />;
export const Input = () => <ExampleInput />;
export const Verification = () => <ExampleVerification />;
