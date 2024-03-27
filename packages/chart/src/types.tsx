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
    state: ISharedChartState;
    transition: IChartTransition;
  },
  index: number,
) => ReactElement;

export interface IChartState {
  next: number;
  current: number;
}

export type ISharedChartState = SharedValue<IChartState>;
export type IChartTransition = SharedValue<number>;
