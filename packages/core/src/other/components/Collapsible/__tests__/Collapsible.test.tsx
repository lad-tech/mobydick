import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Platform} from 'react-native';

import Collapsible from '../Collapsible';
import View from '../../../../basic/components/View/View';
import {LABELS} from '../../../constants';

describe('Collapsible', () => {
  test('render crossed onPress - 1', () => {
    const {toJSON, getByLabelText} = render(
      <Collapsible
        title={'title'}
        duration={1000}
        containerStyle={{backgroundColor: 'red'}}
        headerStyle={{backgroundColor: 'red'}}
        typeAnimation={'linear'}
        creationPropAnimation={'opacity'}
        fontTitle={'Regular-Black-S'}
        titleStyle={{flex: 1}}
        numberOfLines={1}>
        <>
          <View />
        </>
      </Collapsible>,
    );

    const onPress = getByLabelText(LABELS.collapsed);

    fireEvent.press(onPress);

    expect(toJSON()).toMatchSnapshot();
  });
  test('render crossed onPress - 1 android', () => {
    Platform.OS = 'android';

    const {toJSON, getByLabelText} = render(
      <Collapsible title={'title'} duration={1000}>
        <>
          <View />
        </>
      </Collapsible>,
    );

    const onPress = getByLabelText(LABELS.collapsed);

    fireEvent.press(onPress);

    expect(toJSON()).toMatchSnapshot();
  });
  test('render crossed onPress - 2', () => {
    const {toJSON, getByLabelText} = render(
      <Collapsible title={'title'} initialState={true} isAnimated={false}>
        <>
          <View />
        </>
      </Collapsible>,
    );

    const onPress = getByLabelText(LABELS.collapsed);

    fireEvent.press(onPress);
    fireEvent.press(onPress);

    expect(toJSON()).toMatchSnapshot();
  });
});
