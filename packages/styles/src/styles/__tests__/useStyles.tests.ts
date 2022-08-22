import {useStyles} from '@npm/mobydick-styles';
import {renderHook} from '@testing-library/react-hooks';
import {StyleSheet} from 'react-native';

import {defaultThemeContext} from '../../theme/context';

const styles = () => StyleSheet.create({test: {flex: 1}});

describe('useStyles', () => {
  it('render correctly', () => {
    const {result} = renderHook(() => useStyles(styles));
    expect(result.current).toStrictEqual([styles(), defaultThemeContext]);
  });
});
