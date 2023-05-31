import {device, element, by, expect} from 'detox';

import {TEXTS} from '../../const';
import {getTypeTextField, getPlatform} from '../../functions';

const typeTextField = getTypeTextField();
const devicePlatform = getPlatform();

describe('Button', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have basic button', async () => {
    await element(by.text(TEXTS.NAVIGATOR)).tap();

    await element(by.text('basic button')).tap();
    await element(by.text(TEXTS.PREVIEW)).tap();
    await expect(element(by.text('text big text'))).toBeVisible();
    await element(by.text(TEXTS.ADDONS)).tap();
    await element(by.text(TEXTS.KNOBS)).tap();
    if (devicePlatform === 'ios') {
      await element(by.type(typeTextField)).atIndex(4).tap();
      await element(by.text('large')).tap();

      await element(by.type(typeTextField)).atIndex(1).tap();
      await element(by.text('secondary')).tap();

      await element(by.type(typeTextField)).atIndex(2).clearText();
      await element(by.type(typeTextField))
        .atIndex(2)
        .replaceText('Добавить карту');

      await element(by.text(TEXTS.PREVIEW)).tap();
      await element(by.text('light')).tap();
    } else {
      await element(by.text('size')).tap({x: 5, y: 20});
      await element(by.text('large')).tap();

      await element(by.text('type')).tap({x: 5, y: 20});
      await element(by.text('secondary')).tap();

      await element(by.type(typeTextField)).atIndex(1).clearText();
      await element(by.type(typeTextField))
        .atIndex(1)
        .replaceText('Добавить карту');

      await element(by.text(TEXTS.PREVIEW)).tap();
      await element(by.text('light')).tap();
    }
  });
});
