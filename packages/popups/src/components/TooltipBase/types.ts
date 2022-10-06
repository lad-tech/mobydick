import {ViewStyle} from 'react-native';

import {IPosition} from '../../types';

export enum IPlacement {
  start = 'start',
  center = 'center',
  end = 'end',
}

export interface IArrowViewPopup {
  placement: IPlacement;
  position: IPosition;
  arrowViewStyles?: ViewStyle | ViewStyle[];
}
