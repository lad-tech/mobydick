import {IAvatarProps} from '../other';

type URI = string;
type FileHandle = number;

export interface IChatMessage {
  isMe: boolean;
  time: string;
  message?: string | undefined;
  image?: FileHandle | URI | undefined;
}
export interface IChatMessageAvatar extends IAvatarProps, IChatMessage {
  onPress?: () => void;
}
