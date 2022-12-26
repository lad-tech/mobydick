import {
  Button,
  Counter,
  IButtonTypes,
  ICounterSize,
  ICounterTypes,
  View,
} from '@npm/mobydick-core';
import {number, select} from '@storybook/addon-knobs';
import React from 'react';

const CounterExample = () => {
  return (
    <View>
      <Counter
        style={{top: number('top one counter', -40)}}
        count={28}
        type={select('type one counter', ICounterTypes, ICounterTypes.tertiary)}
        size={select('size one counter', ICounterSize, ICounterSize.medium)}
      />
      <Counter
        count={2}
        type={select(
          'type two counter',
          ICounterTypes,
          ICounterTypes.destructive,
        )}
        style={{
          top: number('top two counter', -12),
          right: number('right two counter', 0),
        }}
        size={select('size two counter', ICounterSize, ICounterSize.medium)}
      />
      <Counter
        style={{
          bottom: number('bottom three counter', -40),
          backgroundColor: '#ff0000',
        }}
        count={number('three count', 100)}
        maxLength={number('three counter 2 -> 99+, 3->999+', 2)}
        size={select('size three counter', ICounterSize, ICounterSize.small)}
      />
      <Button text={'Кнопка'} type={IButtonTypes.destructive} />
    </View>
  );
};
export default CounterExample;
