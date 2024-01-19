import {Canvas, Group, Text, useCanvasRef} from '@shopify/react-native-skia';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {useSharedValue} from 'react-native-reanimated';
import React from 'react';
import {useTheme} from '@lad-tech/mobydick-core';

import {IChart, IDataset, IFormatter} from '../types';
import {
  chartPaddingHorizontal,
  chartPaddingVertical,
  defaultChartHeightDivider,
} from '../lib/constants';
import Coordinates from '../components/Coordinates';
import Line from '../components/Line';
import {generateBarsPath} from '../lib/generateBar';

interface IBarChartProps {
  title?: string;
  dataset: IDataset;
  formatterX?: IFormatter;
  formatterY?: IFormatter;
}

const BarChart = ({dataset, title, formatterY, formatterX}: IBarChartProps) => {
  const {colors, spaces} = useTheme();
  const ref = useCanvasRef();
  const periods = Object.keys(dataset);
  const firstPeriod = periods[0] as string;

  const lines = dataset[firstPeriod] as IChart[];
  const firstLine = lines[0] as IChart;

  const {coordinates} = firstLine;

  const {height: frameHeight, width: frameWidth} = useSafeAreaFrame();
  const size = useSharedValue({
    width: frameWidth,
    height: frameHeight / defaultChartHeightDivider,
  });
  const {height: realHeight, width: realWidth} = size.value;

  const {height, width} = {
    height: realHeight - chartPaddingVertical,
    width: realWidth - chartPaddingHorizontal,
  };

  const coordinatesLength = coordinates.length;
  const {
    path: chartPath,
    maxX,
    maxY,
    minX,
    minY,
  } = generateBarsPath({
    width,
    height,
    coordinates,
  });

  return (
    <Canvas
      ref={ref}
      style={{
        height: frameHeight / defaultChartHeightDivider,
        width: width,
        backgroundColor: colors.BgPrimary,
        borderRadius: spaces.Space20,
      }}>
      <Group>
        {title && (
          <Text
            text={title}
            x={width / 2 - title.length * 3}
            y={chartPaddingVertical / 2}
            color={colors.TextPrimary}
          />
        )}
        <Line path={chartPath} width={width} colors={colors} strokeWidth={20} />
        <Coordinates
          colors={colors}
          width={width}
          height={height}
          maxY={maxY}
          maxX={maxX}
          minX={minX}
          minY={minY}
          coordinatesLength={coordinatesLength}
          formatterX={formatterX}
          formatterY={formatterY}
        />
      </Group>
    </Canvas>
  );
};
export default BarChart;
