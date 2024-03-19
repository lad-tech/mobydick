import {useState} from 'react';

import {createStyles, Slider, Typography, useStyles, View} from 'shared/ui';

export const SliderWidget = () => {
  const [styles] = useStyles(styleFn);

  const [range, setRange] = useState({low: 0, high: 100});
  const [low, setLow] = useState(0);
  return (
    <View style={styles.container}>
      <Typography font={'Regular-Primary-H5'}>Slider</Typography>
      <View>
        <Typography font={'Regular-Primary-L'}>default</Typography>
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
        <Typography>{`Low: ${range.low} High: ${range.high} Step: ${5}`}</Typography>
      </View>
      <View>
        <Typography font={'Regular-Primary-L'}>disableRange</Typography>
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
        <Typography>{`Low: ${low} Step: ${1}`}</Typography>
      </View>
    </View>
  );
};
const styleFn = createStyles(({spaces}) => ({
  container: {gap: spaces.Space8},
}));
