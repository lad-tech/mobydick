import {useState} from 'react';

import {
  CheckBox,
  ControlsList,
  createStyles,
  Radio,
  Typography,
  useStyles,
  View,
} from '@shared/ui';

export const ControlListWidget = () => {
  const [styles] = useStyles(styleFn);

  const [checkbox, setCheckbox] = useState<string[]>([]);
  const [radio, setRadio] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <Typography font={'Regular-Primary-H5'}>ControlsList</Typography>
      <View>
        <Typography font={'Regular-Primary-L'}>checkbox</Typography>
        <ControlsList
          onChange={setCheckbox}
          values={checkbox}
          listStyles={styles.container}>
          <CheckBox value={'option one'}>
            <Typography>option one</Typography>
          </CheckBox>
          <CheckBox value={'option two'}>
            <Typography>option two</Typography>
          </CheckBox>
        </ControlsList>
      </View>

      <View>
        <Typography font={'Regular-Primary-L'}>radio</Typography>
        <ControlsList
          onChange={setRadio}
          values={radio}
          single={true}
          listStyles={styles.container}>
          <Radio value={'option one'}>
            <Typography>option one</Typography>
          </Radio>
          <Radio value={'option two'}>
            <Typography>option two</Typography>
          </Radio>
        </ControlsList>
      </View>
    </View>
  );
};

const styleFn = createStyles(({spaces}) => ({
  container: {gap: spaces.Space8},
}));
