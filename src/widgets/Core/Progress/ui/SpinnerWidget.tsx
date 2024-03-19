import {StyleSheet} from 'react-native';

import {ISizeSpinner, Spinner, Typography, View} from 'shared/ui';

export const SpinnerWidget = () => {
  return (
    <>
      <Typography font={'Regular-Primary-H5'}>Spinner</Typography>
      <View style={styles.container}>
        <Spinner size={ISizeSpinner.L} duration={1000} />
        <Spinner fill={'#000000'} />
        <Spinner />
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
