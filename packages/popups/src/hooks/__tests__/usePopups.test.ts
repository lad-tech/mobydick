import {usePopups} from '@npm/mobydick-popups';
import {renderHook} from '@testing-library/react-hooks';

describe('@npm/mobydick-popups/usePopups', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  it('should not usePopups', () => {
    const error = new Error(
      '[@npm/mobydick-popups] usePopups hook was called outside of context, wrap your app with PopupsProvider component',
    );
    const {result} = renderHook(() => usePopups());

    expect(result.current.openPopup).toThrow(error);
    expect(result.current.closePopup).toThrow(error);
    expect(result.current.closeAllPopups).toThrow(error);
  });
});
