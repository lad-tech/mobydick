export interface IToggle {
  active: boolean;
  disabled: boolean;
  onPress: (event: boolean) => void;
}
