import {device, element, by, expect} from 'detox';

describe('Button', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have basic button', async () => {
    await expect(element(by.text('NAVIGATOR'))).toBeVisible();

    await element(by.text('NAVIGATOR')).tap();
    await expect(element(by.text('basic button'))).toBeVisible();

    await element(by.text('basic button')).tap();
    await element(by.text('PREVIEW')).tap();
    await element(by.text('text big text')).tap();
  });
});
