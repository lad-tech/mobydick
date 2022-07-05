interface IPanelSpinnerProps {
  isSpin: boolean;
  speed?: number;
  isError?: boolean;
  onCancel?: () => void;
}
export type PanelSpinnerProps = IPanelSpinnerProps;
