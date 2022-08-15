import {Dimensions, Platform} from 'react-native';

import rem from '../rem';

describe('rem', () => {
  it('should correct ios', () => {
    Platform.OS = 'ios';
    const res = rem(10);
    expect(res).toEqual(15);
  });
  it('should correct android', () => {
    Platform.OS = 'android';
    const res = rem(10);
    expect(res).toEqual(13);
  });
  it('should correct horizontal', () => {
    Platform.OS = 'android';
    jest.spyOn(Dimensions, 'get').mockImplementation(() => ({
      width: 818,
      height: 414,
      scale: 1,
      fontScale: 1,
    }));
    const res = rem(10);
    expect(res).toEqual(8);
  });
});
