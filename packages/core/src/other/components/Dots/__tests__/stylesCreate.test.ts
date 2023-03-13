import {renderHook} from '@testing-library/react-hooks';

import stylesCreate from '../stylesCreate';
import useTheme from '../../../../styles/theme/hooks/useTheme';
import rem from '../../../../styles/spaces/rem';

describe('dots/stylesCreate', () => {
  it('must return', () => {
    const {result} = renderHook(() => useTheme());

    expect(stylesCreate(result.current)).toEqual({
      dot: {
        width: rem(8),
        height: rem(8),
        marginHorizontal: rem(5),
        borderRadius: rem(8) / 2,
        backgroundColor: '#B6BBC6',
      },
      dots: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: rem(5),
      },
    });
  });
});
