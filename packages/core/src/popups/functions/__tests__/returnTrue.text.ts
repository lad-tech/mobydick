import {returnTrue} from '../returnTrue';

describe('@npm/mobydick-core/functions', () => {
  it('should renders correctly', () => {
    expect(returnTrue()).toBe(true);
  });
});
