import {SvgProps} from 'react-native-svg';

interface ISpinnerProps {
  duration?: number;
  size?: ISizeSpinner;
}

export enum ISizeSpinner {
  XXS = 'XXS',
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
}
export type SpinnerProps = ISpinnerProps & SvgProps;

interface ILoaderProps {
  size?: ISizeSpinner;
}

export type LoaderProps = ILoaderProps & SvgProps;
