import {IButtonTypes, IStateBtn} from '../components/Button/types';
import {ICounterTypes} from '../../other';

const getCounterType = ({
  type,
  state,
}: {
  type: IButtonTypes;
  state: IStateBtn;
}) => {
  if (state === IStateBtn.disabled) {
    return ICounterTypes.muted;
  }

  if (state === IStateBtn.danger && type === IButtonTypes.primary) {
    return ICounterTypes.attentionLight;
  }

  if (state === IStateBtn.default) {
    if (type === IButtonTypes.tertiary) {
      return ICounterTypes.accent;
    }
    if (type === IButtonTypes.secondary) {
      return ICounterTypes.neutral;
    }
  }
  if (
    state === IStateBtn.danger &&
    (type === IButtonTypes.secondary || type === IButtonTypes.tertiary)
  ) {
    return ICounterTypes.attention;
  }

  return ICounterTypes.accentLight;
};

export default getCounterType;
