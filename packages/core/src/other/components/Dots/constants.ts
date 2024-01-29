import rem from '../../../styles/utils/rem';

export const SPAN_SIZE = 3;

export const SIZE_LARGE = rem(8);
export const SIZE_MEDIUM = rem(6);
export const SIZE_SMALL = rem(4);

export const MARGIN_DOT = rem(5) * 2;

export const WIDTH_SMALL =
  (SIZE_LARGE + MARGIN_DOT) * 3 +
  (SIZE_MEDIUM + MARGIN_DOT) +
  (SIZE_SMALL + MARGIN_DOT);

export const WIDTH_MEDIUM = WIDTH_SMALL + (SIZE_MEDIUM + MARGIN_DOT);

export const WIDTH_LARGE = WIDTH_MEDIUM + (SIZE_SMALL + MARGIN_DOT);
