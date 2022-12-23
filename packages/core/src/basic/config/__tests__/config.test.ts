import {getConfig, setConfig} from '../index';

describe('config', () => {
  test('setConfig and getConfig', () => {
    expect(getConfig().allowFontScaling).toBe(true);

    setConfig({allowFontScaling: true});
    expect(getConfig().allowFontScaling).toBe(true);

    setConfig({allowFontScaling: false});
    expect(getConfig().allowFontScaling).toBe(false);
  });
});
