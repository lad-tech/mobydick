import {
  createStyles,
  PanelSpinner,
  Typography,
  useStyles,
  View,
} from '@shared/ui';

export const PanelSpinnerWidget = () => {
  const [styles] = useStyles(stylesFn);
  return (
    <View>
      <Typography font={'Regular-Primary-H5'}>PanelSpinner</Typography>
      <View style={styles.container}>
        <View style={styles.panelContainer}>
          <PanelSpinner isLoading={true} />
          <Typography font={'Regular-Primary-XS'}>isLoading=true</Typography>
        </View>
        <View style={styles.panelContainer}>
          <PanelSpinner isLoading={false} />
          <Typography font={'Regular-Primary-XS'}>isLoading=false</Typography>
        </View>
        <View style={styles.panelContainer}>
          <PanelSpinner isLoading={true} onCancel={() => {}} />
          <Typography font={'Regular-Primary-XS'}>with onCancel</Typography>
        </View>
      </View>
    </View>
  );
};

const stylesFn = createStyles(({spaces}) => ({
  container: {
    flexDirection: 'row',
    gap: spaces.Space8,
  },
  panelContainer: {
    flex: 1,
    alignItems: 'center',
  },
}));
