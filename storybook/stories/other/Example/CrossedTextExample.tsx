import React from 'react';
import {number, select, text} from '@storybook/addon-knobs';

import selectFont from '../../../utils/selectFont';

import {CrossedText, Typography, useTheme, View} from '@lad-tech/mobydick-core';

const CrossedTextExample = () => {
  const {colors} = useTheme();
  const lineHeight = number('lineHeight', 1);
  const font = select('font', selectFont, 'Regular-Primary-S');
  const lineColor = select('lineColor', colors, colors.TextError);
  const crossedText = text('text', 'Зачеркнутый текст');

  return (
    <>
      <View>
        <CrossedText font={font} lineColor={lineColor} lineHeight={lineHeight}>
          {crossedText}
        </CrossedText>
      </View>
      <Typography style={{textDecorationLine: 'line-through'}}>
        {'Default props for crossed text'}
      </Typography>
    </>
  );
};

export default CrossedTextExample;
