import {device, element, by} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('press on dropdown', async () => {
    await expect(element(by.text('Язык'))).toBeVisible();

    await element(by.label('selector')).tap();
  });
});
