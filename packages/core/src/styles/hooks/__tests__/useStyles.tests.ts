import {renderHook} from '@testing-library/react-hooks';
import {StyleSheet} from 'react-native';

import useStyles from '../useStyles';
import {defaultThemeContext} from '../../context/context';

const styles = () => StyleSheet.create({test: {flex: 1}});

describe('useStyles', () => {
  it('render correctly', () => {
    const {result} = renderHook(() => useStyles(styles));
    expect(result.current).toStrictEqual([styles(), defaultThemeContext]);
  });
});
