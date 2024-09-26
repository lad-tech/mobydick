import {
  Collapsible,
  createStyles,
  TypographyLegacy,
  useStyles,
  View,
} from '@/shared/ui';
import Header from '@/shared/ui/Header';

export const CollapsibleWidget = () => {
  const [styles] = useStyles(stylesFn);

  return (
    <View>
      <Header title={'Collapsible'} />
      <View style={styles.container}>
        <Collapsible title={'Collapsible'}>
          <TypographyLegacy>
            Component to wrap content in Collapsible element with trigger to
            open and close
          </TypographyLegacy>
        </Collapsible>
      </View>
    </View>
  );
};

const stylesFn = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space16,
  },
}));
