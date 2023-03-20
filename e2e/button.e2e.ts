import {device, element, by} from 'detox';

describe('Button', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have basic button', async () => {
    await element(by.text('NAVIGATOR')).tap();

    await element(by.text('basic button')).tap();
    await element(by.text('ADDONS')).tap();
    await element(by.text('KNOBS')).tap();

    await element(by.type('RCTUITextField')).atIndex(2).clearText();
    await element(by.type('RCTUITextField'))
      .atIndex(2)
      .typeText('Добавить карту');
    await element(by.type('RCTUITextField')).atIndex(4).tap();
    await element(by.text('large')).tap();
    await element(by.type('RCTUITextField')).atIndex(1).tap();
    await element(by.text('secondary')).tap();
    // await element(by.type('RCTView')).atIndex(1).tap({x: 190, y: 400}); // disabled
    // await element(by.type('RCTView')).atIndex(2).tap({x: 190, y: 460}); //loading

    await element(by.text('PREVIEW')).tap();
    await element(by.text('light')).tap();
  });
});
