import {TypographyLegacyProp} from '../../../typography';

import {IButtonSize, IButtonTypes} from './types';

export const getDefaultFont = (
  size: IButtonSize,
  type: IButtonTypes,
): TypographyLegacyProp => {
  let defaultButtonFont = 'SemiBold';

  switch (type) {
    case IButtonTypes.disabled:
      defaultButtonFont += '-Muted';
      break;
    case IButtonTypes.primary:
    case IButtonTypes.destructive:
    case IButtonTypes.loading:
      defaultButtonFont += '-White';
      break;
    case IButtonTypes.secondary:
    case IButtonTypes.tertiary:
      defaultButtonFont += '-Accent';
  }

  switch (size) {
    case IButtonSize.small:
      defaultButtonFont += '-XS';
      break;
    case IButtonSize.large:
    case IButtonSize.fixed:
    default:
      defaultButtonFont += '-L';
      break;
  }

  return defaultButtonFont as TypographyLegacyProp;
};
