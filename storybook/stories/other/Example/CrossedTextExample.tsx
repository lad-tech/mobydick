import React from 'react';

import {CrossedText, Typography, useTheme, View} from '@npm/mobydick-core';

const CrossedTextExample = () => {
  const {colors} = useTheme();
  return (
    <>
      <View>
        <CrossedText lineColor={colors.TextError}>
          {'Зачеркнутый текст'}
        </CrossedText>
      </View>
      <Typography style={{textDecorationLine: 'line-through'}}>
        {'Default props for crossed text'}
      </Typography>
    </>
  );
};

export default CrossedTextExample;
