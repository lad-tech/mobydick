import {ViewStyle} from 'react-native';

import {ICounterTypes, IIndicatorTypes} from '../Badge';

export interface IUser {
  firstName: string;
  middleName?: string;
  lastName?: string;
  logo?: string;
}

export enum IAvatarSize {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

export enum IAvatarTypes {
  icon = 'icon',
  text = 'text',
}

export enum IStatusTypes {
  star = 'icon-starfill',
}

export enum IBadgeTypes {
  indicator = 'indicator',
  counter = 'counter',
  status = 'status',
}

export type IBadge =
  | {
      type: IBadgeTypes.indicator;
      value: IIndicatorTypes;
    }
  | {
      type: IBadgeTypes.status;
      value: IStatusTypes;
    }
  | {
      type: IBadgeTypes.counter;
      value: ICounterTypes;
      count: number;
    };
export interface IAvatarProps {
  user: IUser | null;
  type?: IAvatarTypes;
  size?: IAvatarSize;
  backgroundColor?: string;
  style?: ViewStyle[] | ViewStyle;
  badge?: IBadge;
  backgroundColorBadge?: string;
  disabled?: boolean;
  border?: boolean;
}

export interface IAvatarGroupProps {
  groups: IUser[];
  backgroundColor?: string;
  type?: IAvatarTypes;
  groupCount?: number;
}
