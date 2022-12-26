import {renderHook} from '@testing-library/react-hooks';

import {useFont} from '../useFont';

describe('useFont', () => {
  test('positive case default font', () => {
    const {
      result: {current},
    } = renderHook(() => useFont());

    expect(current.fontStyle).toStrictEqual({
      color: '#20242D',
      fontFamily: 'Inter-Regular',
      fontSize: 22.5,
      lineHeight: 28.5,
    });
  });
  test('positive case custom font', () => {
    const {
      result: {current},
    } = renderHook(() => useFont('Medium-Primary-S'));

    expect(current.fontStyle).toStrictEqual({
      color: '#20242D',
      fontFamily: 'Inter-Medium',
      fontSize: 22.5,
      lineHeight: 28.5,
    });
  });
});
