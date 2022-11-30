import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Button, IButtonTypes} from '@npm/mobydick-cta';
import {View} from '@npm/mobydick-core';
import {select} from '@storybook/addon-knobs';
import {Counter, ICounterSize, ICounterTypes} from '@npm/mobydick-other';

import CenterView from '../CenterView';

const CounterExample = () => {
  return (
    <View>
      <Counter
        style={{top: -40}}
        count={28}
        type={select('type one counter', ICounterTypes, ICounterTypes.tertiary)}
        size={select('size one counter', ICounterSize, ICounterSize.medium)}
      />
      <Counter
        count={2}
        type={select(
          'type two counter',
          ICounterTypes,
          ICounterTypes.secondary,
        )}
        size={select('size two counter', ICounterSize, ICounterSize.medium)}
      />
      <Counter
        style={{bottom: -40, backgroundColor: '#ff0000'}}
        count={100}
        size={select('size three counter', ICounterSize, ICounterSize.small)}
      />
      <Button text={'Кнопка'} type={IButtonTypes.primary} />
    </View>
  );
};

storiesOf('Design system/Other', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Counter', () => <CounterExample />);
