import {useState} from 'react';

import {createStyles, Tabs, useStyles, View} from 'shared/ui';
import Header from 'shared/ui/Header';

const TABS_TEST = [
  {value: 'tab1', label: 'tab1'},
  {value: 'tab2', label: 'tab2'},
  {value: 'tab3', label: 'tab3'},
  {value: 'tab4', label: 'tab4'},
  {value: 'tab5', label: 'tab5'},
  {value: 'tab6', label: 'tab6'},
  {value: 'tab7', label: 'tab7'},
  {value: 'tab8', label: 'tab8'},
  {value: 'tab9', label: 'tab9'},
];

export const TabsWidget = () => {
  const [styles] = useStyles(stylesFn);

  const [activeValue, setActiveValue] = useState<string | number>('tab1');

  return (
    <View style={styles.container}>
      <Header title={'Tabs'} />
      <Tabs
        list={TABS_TEST}
        onPressCommon={item => setActiveValue(item.value)}
        activeValue={activeValue}
      />
    </View>
  );
};

const stylesFn = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space16,
    alignItems: 'center',
  },
}));
