import {ICounterTypes} from '@npm/mobydick-other';

import {IButtonTypes} from '../components/Button/types';

const getCounterType = (type: IButtonTypes) => {
  switch (type) {
    case IButtonTypes.secondary:
      return ICounterTypes.secondary;
    case IButtonTypes.tertiary:
      return ICounterTypes.tertiary;
    case IButtonTypes.disabled:
      return ICounterTypes.disabled;
    case IButtonTypes.destructive:
      return ICounterTypes.destructive;
    case IButtonTypes.primary:
    default:
      return ICounterTypes.primary;
  }
};

export default getCounterType;
