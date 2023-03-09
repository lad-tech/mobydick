import React, {useCallback, useState} from 'react';
import {boolean} from '@storybook/addon-knobs';
import {StyleSheet} from 'react-native';

import {
  IThemeContext,
  rem,
  Slider,
  Typography,
  useStyles,
  View,
} from '@npm/mobydick-core';

const SliderExample = () => {
  const [styles] = useStyles(stylesCreate);
  const rangeDisabled = boolean('rangeDisabled', true);

  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);

  const handleValueChange = useCallback((lowValue, highValue) => {
    setLow(lowValue);
    setHigh(highValue);
  }, []);

  return (
    <View style={styles.container}>
      <Slider
        min={0}
        max={100}
        step={1}
        disableRange={rangeDisabled}
        onValueChanged={handleValueChange}
      />
      <View style={styles.subtitle}>
        <Typography font={'Regular-Primary-XL'} style={styles.text}>
          {low}
        </Typography>
        <Typography font={'Regular-Primary-XL'} style={styles.text}>
          {high}
        </Typography>
      </View>

      <View style={{height: 1000}} />
    </View>
  );
};
const stylesCreate = ({spaces}: IThemeContext) => {
  return StyleSheet.create({
    container: {
      alignItems: 'stretch',
      paddingHorizontal: spaces.Space12,
      paddingTop: rem(100),
      flex: 1,
      width: '100%',
    },
    subtitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    text: {
      width: 50,
    },
  });
};
export default SliderExample;
