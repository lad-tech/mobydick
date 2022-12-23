import {renderHook} from '@testing-library/react-hooks';

import usePopups from '../usePopups';

describe('@npm/mobydick-core/usePopups', () => {
  it('should not usePopups', () => {
    const error = new Error(
      '[@npm/mobydick-core] usePopups hook was called outside of context, wrap your app with PopupsProvider component',
    );
    const {result} = renderHook(() => usePopups());

    expect(result.current.openPopup).toThrow(error);
    expect(result.current.closePopup).toThrow(error);
    expect(result.current.closeAllPopups).toThrow(error);
  });
});
