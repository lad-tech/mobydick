export interface ICommonControlProps {
  selected?: boolean;
}

export interface IControlProps extends ICommonControlProps {
  text: string;
  disabled?: boolean;
}
