import {IThemeContext} from '../../styles/types';
import {IButtonTypes, IStateBtn} from '../components/Button/types';

function getSpinnerColor({
  type,
  state,
  theme,
}: {
  type: IButtonTypes;
  state: IStateBtn;
  theme: IThemeContext;
}): string {
  if (state === IStateBtn.disabled) {
    return theme.colors.ElementMuted;
  }
  if (
    state === IStateBtn.danger &&
    (type === IButtonTypes.secondary || type === IButtonTypes.tertiary)
  ) {
    return theme.colors.ElementError;
  }

  if (state === IStateBtn.default) {
    if (type === IButtonTypes.tertiary) {
      return theme.colors.ElementAccent;
    }
    if (type === IButtonTypes.secondary) {
      return theme.colors.ElementNeutral;
    }
  }

  return theme.colors.ElementWhite;
}

export default getSpinnerColor;
