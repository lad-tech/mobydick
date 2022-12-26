import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {fireEvent} from '@testing-library/react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {Radio} from '../../Radio';
import cloneControls from '../cloneControls';
import {ControlsList} from '../index';
import {Typography} from '../../../typography/components/Typography/Typography';

const list = (single: boolean, selected: boolean) => (
  <ControlsList single={single} onChange={jest.fn}>
    <Radio value={'1'} selected={selected}>
      <Typography font={'Regular-Primary-M'}>1</Typography>
    </Radio>
    <Radio value={'2'}>
      <Typography font={'Regular-Primary-M'}>2</Typography>
    </Radio>
  </ControlsList>
);

describe('cloneControls', function () {
  afterEach(() => jest.resetModules());
  it('should works right', async function () {
    const controls = list(false, false).props.children;
    const {result} = renderHook(() => cloneControls(controls));
    expect(result.current.radios).toHaveLength(2);
    expect(result.current.values).toHaveLength(0);
  });

  it('should return both values', function () {
    const controls = list(false, false).props.children;
    const {result} = renderHook(() => cloneControls(controls));
    fireEvent.press(result.current.radios[0] as unknown as ReactTestInstance);
    fireEvent.press(result.current.radios[1] as unknown as ReactTestInstance);
    expect(result.current.values).toHaveLength(2);
    expect(result.current.values[0]).toEqual('1');
    expect(result.current.values[1]).toEqual('2');
  });

  it('should return one value', function () {
    const controls = list(true, false).props.children;
    const {result} = renderHook(() => cloneControls(controls, true));
    fireEvent.press(result.current.radios[0] as unknown as ReactTestInstance);
    fireEvent.press(result.current.radios[1] as unknown as ReactTestInstance);
    expect(result.current.values).toHaveLength(1);
    expect(result.current.values[0]).toEqual('2');
  });

  it('should return one value with selected prop', async function () {
    jest.useRealTimers();
    const controls = list(false, true).props.children;
    const {result} = renderHook(() => cloneControls(controls, false));
    fireEvent.press(result.current.radios[1] as unknown as ReactTestInstance);
    fireEvent.press(result.current.radios[0] as unknown as ReactTestInstance);
    expect(result.current.values).toHaveLength(1);
    expect(result.current.values[0]).toEqual('2');
  });
});
