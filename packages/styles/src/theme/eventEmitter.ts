import {DeviceEventEmitter} from 'react-native';

export const eventEmitterTheme = DeviceEventEmitter;

export enum IEventEmitterTheme {
  setCurrentTheme = 'setCurrentTheme',
}
