import {createStyles, CrossedText, useStyles, View} from 'shared/ui';
import Header from 'shared/ui/Header';

export const CrossedTextWidget = () => {
  const [styles] = useStyles(stylesFn);

  return (
    <View style={styles.container}>
      <Header title={'CrossedText'} />
      <View>
        <CrossedText lineColor={'red'}>CrossedText</CrossedText>
      </View>
    </View>
  );
};

const stylesFn = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space16,
    alignItems: 'center',
  },
}));
