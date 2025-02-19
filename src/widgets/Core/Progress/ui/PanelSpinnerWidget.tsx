import {
  createStyles,
  PanelSpinner,
  Title,
  Typography,
  useStyles,
  View,
} from '@/shared/ui';

export const PanelSpinnerWidget = () => {
  const [styles] = useStyles(stylesFn);
  return (
    <View>
      <Title font={'Primary-H5'}>PanelSpinner</Title>
      <View style={styles.container}>
        <View style={styles.panelContainer}>
          <PanelSpinner isLoading={true} />
          <Typography font={'Regular-Primary-S'}>isLoading=true</Typography>
        </View>
        <View style={styles.panelContainer}>
          <PanelSpinner isLoading={false} />
          <Typography font={'Regular-Primary-S'}>isLoading=false</Typography>
        </View>
        <View style={styles.panelContainer}>
          <PanelSpinner isLoading={true} onCancel={() => {}} />
          <Typography font={'Regular-Primary-S'}>with onCancel</Typography>
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
