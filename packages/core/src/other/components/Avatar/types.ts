import {ViewStyle} from 'react-native';

export interface IUser {
  firstName: string;
  lastName?: string;
  logo?: string;
}

export enum ISizeAvatar {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}
export enum ITypeAvatar {
  icon = 'icon',
  text = 'text',
}

interface IAvatarProps {
  user: IUser | null;
  type?: ITypeAvatar;
  size?: ISizeAvatar;
  backgroundColor?: string;
  style?: ViewStyle[] | ViewStyle;
}

export type AvatarProps = IAvatarProps;
