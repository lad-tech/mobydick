import {Extrapolation, interpolate} from 'react-native-reanimated';
import {SkFont, Skia, SkPath} from '@shopify/react-native-skia';

import {IFormatter} from '../types';

import {chartPaddingHorizontal, chartPaddingVertical} from './constants';

interface IGetCoordinateValuesParams {
  font: SkFont;
  maxY: number;
  minY: number;
  maxX: number;
  minX: number;
  height: number;
  width: number;
  coordinatesLength: number;

  formatterX?: IFormatter | undefined;
  formatterY?: IFormatter | undefined;
}

type ICoordinateValue = {value: string; coordinate: number; path: SkPath};

export type IGetCoordinateValuesReturn = {
  coordinateValuesY: ICoordinateValue[];
  coordinateValuesX: ICoordinateValue[];
};
export const getCoordinateValues = ({
  font,
  maxY,
  minY,
  maxX,
  minX,
  height,
  width,
  coordinatesLength,
  formatterX,
  formatterY,
}: IGetCoordinateValuesParams): IGetCoordinateValuesReturn => {
  'worklet';

  const netCount = coordinatesLength - 1;
  const stepY = (maxY - minY) / netCount;
  const stepX = (maxX - minX) / netCount;

  const coordinateValuesY: ICoordinateValue[] = [];
  const coordinateValuesX: ICoordinateValue[] = [];

  let lastXEndOfText = 0;
  let lastYEndOfText = height;

  for (let i = 0; i < coordinatesLength; i++) {
    // For Y coordinate
    const valueY = minY + stepY * i;
    const coordinateY = interpolate(
      valueY,
      [minY, maxY],
      [
        height - chartPaddingVertical,
        chartPaddingVertical + chartPaddingVertical / 2,
      ],
      Extrapolation.CLAMP,
    );
    const valueYFormatted = formatterY?.(valueY) ?? valueY.toFixed(2);

    const {height: textYHeight} = font.measureText(valueYFormatted);

    const textYCoord = coordinateY + textYHeight / 2;

    const textYTop = textYCoord - textYHeight;

    const pathY = Skia.Path.Make()
      .moveTo(chartPaddingHorizontal, coordinateY)
      .lineTo(width, coordinateY);
    pathY.dash(2, 2, 2);

    if (textYCoord < lastYEndOfText) {
      coordinateValuesY.push({
        value: valueYFormatted,
        coordinate: textYCoord,
        path: pathY,
      });
      lastYEndOfText = textYTop;
    }

    // For X coordinate
    const valueX = minX + stepX * i;
    const coordinateX = interpolate(
      valueX,
      [minX, maxX],
      [
        chartPaddingHorizontal + chartPaddingHorizontal / 2,
        width - chartPaddingHorizontal,
      ],
      Extrapolation.CLAMP,
    );

    const valueXFormatted = formatterX?.(valueX) ?? valueX.toFixed(2);

    const {width: textXWidth} = font.measureText(valueXFormatted);

    const textXCoord = coordinateX - textXWidth / 2;

    const textXEnd = coordinateX + textXWidth;

    const pathX = Skia.Path.Make()
      .moveTo(coordinateX, height - chartPaddingVertical / 2)
      .lineTo(coordinateX, chartPaddingVertical);
    pathX.dash(2, 2, 2);

    if (textXCoord > lastXEndOfText) {
      coordinateValuesX.push({
        value: valueXFormatted,
        coordinate: textXCoord,
        path: pathX,
      });
      lastXEndOfText = textXEnd;
    }
  }

  return {
    coordinateValuesY,
    coordinateValuesX,
  };
};
