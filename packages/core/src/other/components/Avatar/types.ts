export interface IUser {
  logo?: string; // https://vraki.net/sites/default/files/inline/images/30_55.jpg
  firstName: string; // "Иван"
  lastName?: string; // "Пушкин"
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
