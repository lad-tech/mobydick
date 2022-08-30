import {TypographyProp} from '@npm/mobydick-typography';

const getFont = (
  subTitle?: string,
  selected?: string[],
  textFont?: TypographyProp,
): TypographyProp => {
  if (textFont) {
    return textFont;
  }

  if (subTitle || selected) {
    return 'Regular-Primary-M';
  }
  return 'Regular-Primary-L';
};

export default getFont;
