interface IPanelSpinnerProps {
  isLoading: boolean;
  speed?: number;
  isError?: boolean;
  onCancel?: () => void;
}
export type PanelSpinnerProps = IPanelSpinnerProps;
