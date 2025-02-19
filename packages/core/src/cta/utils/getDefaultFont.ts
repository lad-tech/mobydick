import {TypographyProp} from '../../typography/types';
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
): TypographyProp => {
  let defaultButtonFont = 'SemiBold';

  defaultButtonFont += pickColorTextBtn({type, state});

  switch (size) {
    case IButtonSize.small:
      defaultButtonFont += '-S';
      break;
    case IButtonSize.large:
    case IButtonSize.fixed:
    default:
      defaultButtonFont += '-M';
      break;
  }

  return defaultButtonFont as TypographyProp;
};

export default getDefaultFont;
