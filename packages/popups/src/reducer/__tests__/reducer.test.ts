import {POPUP_CLOSE_ALL} from '@npm/mobydick-popups/src/reducer';

import {defaultState, reducer} from '../reducer';

describe('Popup reducer', () => {
  test('Default works', () => {
    // dirty hack for get into default case
    expect(
      reducer(defaultState, {type: 'type' as typeof POPUP_CLOSE_ALL}),
    ).toStrictEqual(defaultState);
  });
});
