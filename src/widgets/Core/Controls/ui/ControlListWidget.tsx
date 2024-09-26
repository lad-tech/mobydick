import {useState} from 'react';

import {
  CheckBox,
  ControlsList,
  createStyles,
  Radio,
  TypographyLegacy,
  useStyles,
  View,
} from '@/shared/ui';

export const ControlListWidget = () => {
  const [styles] = useStyles(styleFn);

  const [checkbox, setCheckbox] = useState<string[]>([]);
  const [radio, setRadio] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <TypographyLegacy font={'Regular-Primary-H5'}>
        ControlsList
      </TypographyLegacy>
      <View>
        <TypographyLegacy font={'Regular-Primary-L'}>checkbox</TypographyLegacy>
        <ControlsList
          onChange={setCheckbox}
          values={checkbox}
          listStyles={styles.container}>
          <CheckBox value={'option one'}>
            <TypographyLegacy>option one</TypographyLegacy>
          </CheckBox>
          <CheckBox value={'option two'}>
            <TypographyLegacy>option two</TypographyLegacy>
          </CheckBox>
        </ControlsList>
      </View>

      <View>
        <TypographyLegacy font={'Regular-Primary-L'}>radio</TypographyLegacy>
        <ControlsList
          onChange={setRadio}
          values={radio}
          single={true}
          listStyles={styles.container}>
          <Radio value={'option one'}>
            <TypographyLegacy>option one</TypographyLegacy>
          </Radio>
          <Radio value={'option two'}>
            <TypographyLegacy>option two</TypographyLegacy>
          </Radio>
        </ControlsList>
      </View>
    </View>
  );
};

const styleFn = createStyles(({spaces}) => ({
  container: {gap: spaces.Space8},
}));
