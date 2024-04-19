import {renderHook} from '@testing-library/react-hooks';

import stylesCreate from '../stylesCreate';
import useTheme from '../../../../styles/hooks/useTheme';
import rem from '../../../../styles/utils/rem';

describe('dots/stylesCreate', () => {
  it('must return', () => {
    const {result} = renderHook(() => useTheme());

    expect(stylesCreate(result.current, {size: 12})).toEqual({
      dot: {
        width: rem(8),
        height: rem(8),
        marginHorizontal: rem(5),
        borderRadius: rem(8) / 2,
      },
      dots: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: rem(5),
      },
    });
  });
});
