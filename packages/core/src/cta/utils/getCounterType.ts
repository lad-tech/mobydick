import {IButtonTypes} from '../components/Button/types';
import {ICounterTypes} from '../../other';

const getCounterType = (type: IButtonTypes) => {
  switch (type) {
    case IButtonTypes.secondary:
      return ICounterTypes.accentLight;
    case IButtonTypes.tertiary:
      return ICounterTypes.accent;
    case IButtonTypes.disabled:
      return ICounterTypes.mutedLight;
    case IButtonTypes.destructive:
      return ICounterTypes.attentionLight;
    case IButtonTypes.primary:
    default:
      return ICounterTypes.accentLight;
  }
};

export default getCounterType;
