import {
  Collapsible,
  createStyles,
  Typography,
  useStyles,
  View,
} from 'shared/ui';
import Header from 'shared/ui/Header';
export const CollapsibleWidget = () => {
  const [styles] = useStyles(stylesFn);

  return (
    <View>
      <Header title={'Collapsible'} />
      <View style={styles.container}>
        <Collapsible title={'Collapsible'}>
          <Typography>
            Component to wrap content in Collapsible element with trigger to
            open and close
          </Typography>
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
