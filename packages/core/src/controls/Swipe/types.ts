export interface ISwipe {
  active: boolean;
  disabled: boolean;
  onPress: (isActive: boolean) => void;
}
