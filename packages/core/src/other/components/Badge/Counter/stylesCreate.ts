import {createStyles} from '../../../../styles';
import px from '../../../../styles/utils/px';

import {ICounterSize, ICounterTypes} from './types';

const stylesCreate = createStyles(
  ({spaces, colors}, size: ICounterSize, type?: ICounterTypes) => {
    const isMedium = size === ICounterSize.medium;
    const defaultSize = isMedium ? spaces.Space24 : px(18);

    const getBackgroundColor = () => {
      switch (type) {
        case ICounterTypes.attention:
          return {backgroundColor: colors.ElementAttention};
        case ICounterTypes.accent:
          return {backgroundColor: colors.ElementBase};
        case ICounterTypes.muted:
          return {backgroundColor: colors.ElementMuted};
        default:
          return {backgroundColor: colors.ElementWhite};
      }
    };

    return {
      counter: {
        zIndex: 1,
        alignSelf: 'center',
        minWidth: defaultSize,
        height: defaultSize,
        borderRadius: defaultSize / 2,
        alignItems: 'center',
        justifyContent: 'center',
        ...getBackgroundColor(),
      },
      text: {
        textAlign: 'center',
        paddingHorizontal: isMedium ? spaces.Space6 : spaces.Space4,
      },
    };
  },
);

export default stylesCreate;
