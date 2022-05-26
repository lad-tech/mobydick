import {CurrentTheme, getTheme, useStyles} from '@npm/mobydick-styles';
import {renderHook} from '@testing-library/react-hooks';
import {StyleSheet} from 'react-native';

const styles = () => StyleSheet.create({test: {flex: 1}});

describe('useStyles', () => {
  const theme = getTheme();
  it('light', () => {
    const {result} = renderHook(() => useStyles(styles));
    expect(result.current).toStrictEqual([
      styles(),
      theme.colors[CurrentTheme.light],
    ]);
  });
});
