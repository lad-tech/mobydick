import {
  createStyles,
  PanelSpinner,
  TypographyLegacy,
  useStyles,
  View,
} from '@shared/ui';

export const PanelSpinnerWidget = () => {
  const [styles] = useStyles(stylesFn);
  return (
    <View>
      <TypographyLegacy font={'Regular-Primary-H5'}>
        PanelSpinner
      </TypographyLegacy>
      <View style={styles.container}>
        <View style={styles.panelContainer}>
          <PanelSpinner isLoading={true} />
          <TypographyLegacy font={'Regular-Primary-XS'}>
            isLoading=true
          </TypographyLegacy>
        </View>
        <View style={styles.panelContainer}>
          <PanelSpinner isLoading={false} />
          <TypographyLegacy font={'Regular-Primary-XS'}>
            isLoading=false
          </TypographyLegacy>
        </View>
        <View style={styles.panelContainer}>
          <PanelSpinner isLoading={true} onCancel={() => {}} />
          <TypographyLegacy font={'Regular-Primary-XS'}>
            with onCancel
          </TypographyLegacy>
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
