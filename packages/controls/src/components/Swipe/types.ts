export interface ISwipe {
  active: boolean;
  disabled: boolean;
  onPress: (event: boolean) => void;
}
