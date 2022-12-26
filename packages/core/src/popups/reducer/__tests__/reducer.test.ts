import {defaultState, reducer} from '../reducer';
import {POPUP_CLOSE_ALL} from '../constatnts';

describe('Popup reducer', () => {
  test('Default works', () => {
    // dirty hack for get into default case
    expect(
      reducer(defaultState, {type: 'type' as typeof POPUP_CLOSE_ALL}),
    ).toStrictEqual(defaultState);
  });
});
