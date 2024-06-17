import {useState} from 'react';

import {
  createStyles,
  Slider,
  TypographyLegacy,
  useStyles,
  View,
} from '@shared/ui';

export const SliderWidget = () => {
  const [styles] = useStyles(styleFn);

  const [range, setRange] = useState({low: 0, high: 100});
  const [low, setLow] = useState(0);
  return (
    <View style={styles.container}>
      <TypographyLegacy font={'Regular-Primary-H5'}>Slider</TypographyLegacy>
      <View>
        <TypographyLegacy font={'Regular-Primary-L'}>default</TypographyLegacy>
        <Slider
          min={0}
          max={100}
          low={range.low}
          high={range.high}
          minRange={10}
          step={5}
          onValueChanged={(low, high) => {
            setRange({low, high});
          }}
        />
        <TypographyLegacy>{`Low: ${range.low} High: ${range.high} Step: ${5}`}</TypographyLegacy>
      </View>
      <View>
        <TypographyLegacy font={'Regular-Primary-L'}>
          disableRange
        </TypographyLegacy>
        <Slider
          min={0}
          max={100}
          step={1}
          low={low}
          disableRange={true}
          onValueChanged={low => {
            setLow(low);
          }}
        />
        <TypographyLegacy>{`Low: ${low} Step: ${1}`}</TypographyLegacy>
      </View>
    </View>
  );
};
const styleFn = createStyles(({spaces}) => ({
  container: {gap: spaces.Space8},
}));
