import {SvgProps} from 'react-native-svg';

interface ISpinnerProps {
  speed?: number;
  size?: ISizeSpinner;
}

export enum ISizeSpinner {
  S = 'S',
  M = 'M',
  L = 'L',
}

export type SpinnerProps = ISpinnerProps & SvgProps;
