export interface IUser {
  logo: string; // https://vraki.net/sites/default/files/inline/images/30_55.jpg
  name: string; // "Иван Пушкин"
}

export enum ISizeAvatar {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

interface IAvatarProps {
  user: IUser | null;
  size?: ISizeAvatar;
}
export type AvatarProps = IAvatarProps;
