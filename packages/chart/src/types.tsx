export interface ICoordinates {
  x: number;
  y: number;
}

export interface IChart {
  name?: string;
  coordinates: ICoordinates[];
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
