import React, {FC, useMemo} from 'react';
import {useTheme} from '@npm/mobydick-styles';
import {Text} from '@npm/mobydick-core';
import {
  ITextColors,
  textColorKeys,
} from '@npm/mobydick-styles/src/colors/types';

import {
  IStyledTextProps,
  TEXT,
  TFontColor,
  TFontSize,
  TFontWeight,
  TSizes,
  TWeights,
} from './types';

const sizes: TSizes = {
  H1: {fontSize: 36, lineHeight: 40},
  H2: {fontSize: 32, lineHeight: 36},
  H3: {fontSize: 28, lineHeight: 32},
  H4: {fontSize: 24, lineHeight: 26},
  H5: {fontSize: 22, lineHeight: 24},

  XL: {fontSize: 20, lineHeight: 24},
  L: {fontSize: 18, lineHeight: 22},
  M: {fontSize: 16, lineHeight: 20},
  S: {fontSize: 15, lineHeight: 19},
  XS: {fontSize: 14, lineHeight: 18},
  XXS: {fontSize: 12, lineHeight: 16},
  XXXS: {fontSize: 10, lineHeight: 14},
};

const weightsToFonts: TWeights = {
  Regular: 'Inter-Regular',
  Medium: 'Inter-Medium',
  SemiBold: 'Inter-SemiBold',
  Bold: 'Inter-Bold',
};

const getSize = (size: TFontSize): {fontSize: number; lineHeight: number} =>
  sizes[size];

const getWeight = (weight: TFontWeight): string => weightsToFonts[weight];

export const fontColors = (textColorKeys as (keyof ITextColors)[]).map(item =>
  item.slice(TEXT.length),
); // нужно для вывода в сторибуке

const Typography: FC<IStyledTextProps> = ({
  children,
  font = 'Regular-Primary-S',
  style,
  ...props
}) => {
  const {currentTheme, colors} = useTheme();

  const fontStyle = useMemo(() => {
    const [weight, color, size] = font.split('-');
    const {fontSize, lineHeight} = getSize(size as TFontSize);
    return {
      color: colors[currentTheme][`${TEXT}${color as TFontColor}`],
      fontFamily: getWeight(weight as TFontWeight),
      fontSize,
      lineHeight,
    };
  }, [font]);

  return (
    <Text style={[fontStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
