interface IPanelSpinnerProps {
  isLoading: boolean;
  duration?: number;
  isError?: boolean;
  onCancel?: () => void;
}
export type PanelSpinnerProps = IPanelSpinnerProps;
