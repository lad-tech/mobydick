import {TypographyProp} from '../../../../typography';

import {ICounterSize, ICounterTypes} from './types';

const getColorText = (type: ICounterTypes) => {
  switch (type) {
    case ICounterTypes.accentLight:
      return 'Accent';
    case ICounterTypes.attentionLight:
      return 'Error';
    case ICounterTypes.mutedLight:
      return 'Muted';
    default:
      return 'White';
  }
};
export const getFont = (
  type: ICounterTypes,
  size: ICounterSize,
): TypographyProp => {
  return `SemiBold-${getColorText(type)}-${size === ICounterSize.medium ? 'M' : 'XS'}`;
};
