import React from 'react';

import {CrossedText, useTheme, View} from '@npm/mobydick-core';

const CrossedTextExample = () => {
  const {colors} = useTheme();
  return (
    <View>
      <CrossedText
        lineColor={colors.TextPrimary}
        style={{backgroundColor: colors.BgError}}>
        {'Зачеркнутый текст'}
      </CrossedText>
    </View>
  );
};

export default CrossedTextExample;
