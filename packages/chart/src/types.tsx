import type {ReactElement} from 'react';
import type {SharedValue} from 'react-native-reanimated';

export interface ICoordinates {
  x: number;
  y: number;
}

export interface IChart {
  name?: string;
  coordinates: ICoordinates[];
  colors?: string[];
}

export interface IDataset {
  [key: string]: IChart[];
}

export type IFormatter = (value: number) => string;

export interface IGeneratePeriodsWithPaths {
  dataset: IDataset;
  width: number;
  height: number;
}

export type IRenderSectionItem = (
  {
    period,
    state,
    transition,
  }: {
    period: string;
    state: ISharedGraphState;
    transition: IChartTransition;
  },
  index: number,
) => ReactElement;

export interface IGraphState {
  next: number;
  current: number;
}

export type ISharedGraphState = SharedValue<IGraphState>;
export type IChartTransition = SharedValue<number>;
