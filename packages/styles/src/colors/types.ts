import {defaultTextLightColor} from './color';

export type ITextColors = typeof defaultTextLightColor;

export const textColorKeys = Object.keys(defaultTextLightColor); // нужно для вывода в сторибуке
