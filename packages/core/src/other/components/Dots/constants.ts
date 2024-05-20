import px from '../../../styles/utils/px';

export const SPAN_SIZE = 3;

export const SIZE_LARGE = px(8);
export const SIZE_MEDIUM = px(6);
export const SIZE_SMALL = px(4);

export const MARGIN_DOT = px(5) * 2;

export const WIDTH_SMALL =
  (SIZE_LARGE + MARGIN_DOT) * 3 +
  (SIZE_MEDIUM + MARGIN_DOT) +
  (SIZE_SMALL + MARGIN_DOT);

export const WIDTH_MEDIUM = WIDTH_SMALL + (SIZE_MEDIUM + MARGIN_DOT);

export const WIDTH_LARGE = WIDTH_MEDIUM + (SIZE_SMALL + MARGIN_DOT);
