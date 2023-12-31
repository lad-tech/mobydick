import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';

import {
  IThemeContext,
  rem,
  Slider,
  Typography,
  useStyles,
  View,
} from '@lad-tech/mobydick-core';

const SliderExample = ({rangeDisabled}: {rangeDisabled: boolean}) => {
  const [styles] = useStyles(stylesCreate);

  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);

  const handleValueChange = useCallback(
    (lowValue: number, highValue: number) => {
      setLow(lowValue);
      setHigh(highValue);
    },
    [],
  );

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
      marginTop: spaces.Space20,
    },
    text: {
      width: rem(50),
    },
  });
};
export default SliderExample;
