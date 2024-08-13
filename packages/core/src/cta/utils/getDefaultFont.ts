import {TypographyLegacyProp} from '../../typography/types';
import {IButtonSize, IButtonTypes, IStateBtn} from '../components/Button/types';

function pickColorTextBtn({
  type,
  state,
}: {
  type: IButtonTypes;
  state: IStateBtn;
}) {
  if (state === IStateBtn.disabled) {
    return '-Muted';
  }
  if (
    state === IStateBtn.danger &&
    (type === IButtonTypes.secondary || type === IButtonTypes.tertiary)
  ) {
    return '-Error';
  }
  if (state === IStateBtn.default && type === IButtonTypes.secondary) {
    return '-Primary';
  }
  if (state === IStateBtn.default && type === IButtonTypes.tertiary) {
    return '-Accent';
  }
  return '-White';
}

const getDefaultFont = (
  size: IButtonSize,
  type: IButtonTypes,
  state: IStateBtn,
): TypographyLegacyProp => {
  let defaultButtonFont = 'SemiBold';

  defaultButtonFont += pickColorTextBtn({type, state});

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

export default getDefaultFont;
