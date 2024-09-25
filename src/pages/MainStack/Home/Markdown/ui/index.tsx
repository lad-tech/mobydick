import {useStyles, View} from '@/shared/ui';
import getScreenStyles from '@/shared/styles/getScreenStyles';
import {MarkdownWidget} from '@/widgets/Markdown/ui/MarkdownWidget';

const MarkdownScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <MarkdownWidget />
    </View>
  );
};

export default MarkdownScreen;
