import {CurrentTheme, defaultTheme, useStyles} from '@mobydick/styles';
import {renderHook} from '@testing-library/react-hooks';
import {StyleSheet} from 'react-native';

const styles = () => StyleSheet.create({test: {flex: 1}});

describe('useStyles', () => {
  it('light', () => {
    const {result} = renderHook(() => useStyles(styles));
    expect(result.current).toStrictEqual([
      styles(),
      {
        colorScheme: CurrentTheme.light,
        ...defaultTheme.colors[CurrentTheme.light],
      },
    ]);
  });
});
