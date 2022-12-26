import {
  defaultTextLightColor,
  ITextColors,
  TEXT,
  TFontSize,
  TFontWeight,
  TypographyProp,
} from '@npm/mobydick-core';

const textColorKeys = Object.keys(
  defaultTextLightColor,
) as (keyof ITextColors)[];
const fontColors = textColorKeys.map(item => item.slice(TEXT.length));

const fontWeights = Object.values(TFontWeight);
const fontSizes = Object.values(TFontSize);

const selectFont = (() => {
  const fonts: string[] = [];
  for (const fontWeight of fontWeights) {
    for (const fontColor of fontColors) {
      for (const fontSize of fontSizes) {
        fonts.push(`${fontWeight}-${fontColor}-${fontSize}`);
      }
    }
  }
  return fonts as TypographyProp[];
})();

export default selectFont;
