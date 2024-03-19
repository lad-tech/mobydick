import {StyleSheet} from 'react-native';

import {ISizeSpinner, Spinner, useTheme, View} from 'shared/ui';
import Header from 'shared/ui/Header';

export const SpinnerWidget = () => {
  const {colors} = useTheme();
  return (
    <>
      <Header title={'Spinner'} />
      <View style={styles.container}>
        <Spinner size={ISizeSpinner.XS} />
        <Spinner size={ISizeSpinner.XXS} />
        <Spinner size={ISizeSpinner.S} />
        <Spinner size={ISizeSpinner.L} duration={1000} />
        <Spinner size={ISizeSpinner.M} />
        <Spinner fill={colors.BgContrast} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
