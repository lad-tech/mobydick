export interface IUser {
  logo?: string;
  firstName: string;
  lastName?: string;
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
}

export type AvatarProps = IAvatarProps;
