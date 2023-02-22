import React, {useCallback, useState} from 'react';
import {boolean} from '@storybook/addon-knobs';

import {Slider, Typography, useTheme, View} from '@npm/mobydick-core';

const SliderExample = () => {
  const {colors} = useTheme();
  const rangeDisabled = boolean('rangeDisabled', true);

  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);

  const handleValueChange = useCallback((lowValue, highValue) => {
    setLow(lowValue);
    setHigh(highValue);
  }, []);

  return (
    <View
      style={{
        alignItems: 'stretch',
        paddingHorizontal: 12,
        paddingTop: 100,
        flex: 1,
        // backgroundColor: '#555',
        width: '100%',
      }}>
      <Slider
        min={0}
        max={100}
        step={1}
        disableRange={rangeDisabled}
        onValueChanged={handleValueChange}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <Typography
          style={{width: 50, color: colors.TextPrimary, fontSize: 20}}>
          {low}
        </Typography>
        <Typography
          style={{width: 50, color: colors.TextPrimary, fontSize: 20}}>
          {high}
        </Typography>
      </View>

      <View style={{height: 1000}} />
    </View>
  );
};

export default SliderExample;
