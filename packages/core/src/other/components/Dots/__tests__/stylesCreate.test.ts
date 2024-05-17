import {renderHook} from '@testing-library/react-hooks';

import stylesCreate from '../stylesCreate';
import useTheme from '../../../../styles/hooks/useTheme';
import px from '../../../../styles/utils/px';

describe('dots/stylesCreate', () => {
  it('must return', () => {
    const {result} = renderHook(() => useTheme());

    expect(stylesCreate(result.current)).toEqual({
      dot: {
        width: px(8),
        height: px(8),
        marginHorizontal: px(5),
        borderRadius: px(8) / 2,
      },
      dots: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: px(5),
      },
    });
  });
});
