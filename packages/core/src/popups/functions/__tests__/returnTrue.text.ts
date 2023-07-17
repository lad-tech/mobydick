import {returnTrue} from '../returnTrue';

describe('@lad-tech/mobydick-core/functions', () => {
  it('should renders correctly', () => {
    expect(returnTrue()).toBe(true);
  });
});
