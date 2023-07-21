import React from 'react';

import {
  CrossedText,
  Typography,
  TypographyProp,
  View,
} from '@lad-tech/mobydick-core';

const CrossedTextExample = ({
  lineHeight,
  font,
  lineColor,
  crossedText,
}: {
  lineHeight: number;
  font: TypographyProp;
  lineColor: string;
  crossedText: string;
}) => {
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
