import {device} from 'detox';

export const getPlatform = () => {
  return device.getPlatform();
};

export const getTypeTextField = () => {
  const device = getPlatform();
  if (device === 'ios') {
    return 'RCTUITextField';
  } else {
    return 'android.widget.EditText';
  }
};
