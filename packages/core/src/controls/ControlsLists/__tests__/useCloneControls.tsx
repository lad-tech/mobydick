import {renderHook} from '@testing-library/react-hooks';
import {fireEvent} from '@testing-library/react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {Radio} from '../../Radio';
import useCloneControls from '../useCloneControls';
import {ControlsList} from '../index';
import {TypographyLegacy} from '../../../typography/components/TypographyLegacy/TypographyLegacy';

const list = (single: boolean) => (
  <ControlsList single={single} onChange={jest.fn} values={[]}>
    <Radio value={'1'}>
      <TypographyLegacy font={'Regular-Primary-M'}>1</TypographyLegacy>
    </Radio>
    <Radio value={'2'}>
      <TypographyLegacy font={'Regular-Primary-M'}>2</TypographyLegacy>
    </Radio>
  </ControlsList>
);

describe('useCloneControls', function () {
  it('should works right', async function () {
    const controls = list(false).props.children;
    const {result} = renderHook(() =>
      useCloneControls(controls, [], jest.fn()),
    );
    expect(result.current.radios).toHaveLength(2);
    expect(result.current.values).toHaveLength(0);
  });

  it('should return both values', function () {
    const controls = list(false).props.children;
    let values: string[] = [];
    const onChange = jest.fn(val => {
      values = val;
    });
    const {result, rerender} = renderHook(() =>
      useCloneControls(controls, values, onChange),
    );
    fireEvent.press(result.current.radios[0] as unknown as ReactTestInstance);
    expect(onChange).toHaveBeenCalledWith(['1']);
    rerender();
    fireEvent.press(result.current.radios[1] as unknown as ReactTestInstance);
    expect(onChange).toHaveBeenCalledWith(['1', '2']);
  });

  it('should return one value', function () {
    const controls = list(true).props.children;
    const onChange = jest.fn();
    const {result} = renderHook(() =>
      useCloneControls(controls, [], onChange, true),
    );
    fireEvent.press(result.current.radios[0] as unknown as ReactTestInstance);
    expect(onChange).toHaveBeenCalledWith(['1']);
    fireEvent.press(result.current.radios[1] as unknown as ReactTestInstance);
    expect(onChange).toHaveBeenCalledWith(['2']);
  });

  it('should return one value with selected prop', async function () {
    const controls = list(false).props.children;
    let values: string[] = ['1'];
    const onChange = jest.fn(val => {
      values = val;
    });
    const {result, rerender} = renderHook(() =>
      useCloneControls(controls, values, onChange, false),
    );
    fireEvent.press(result.current.radios[1] as unknown as ReactTestInstance);
    rerender();
    fireEvent.press(result.current.radios[0] as unknown as ReactTestInstance);
    rerender();
    expect(result.current.values).toHaveLength(1);
    expect(result.current.values[0]).toEqual('2');
  });
});
