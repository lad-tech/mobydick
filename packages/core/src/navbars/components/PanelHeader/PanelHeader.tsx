import {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import View from '../../../basic/components/View/View';
import {createStyles, useStyles} from '../../../styles';
import {IPanelHeaderProps} from '../../types';

import ContentHeader from './components/ContentHeader';

const PanelHeader: FC<IPanelHeaderProps> = props => {
  const {
    commonViewStyle,
    isSafeAreaView = true,
    edges = ['top'],
    ...otherProps
  } = props;

  const [styles] = useStyles(stylesCreate);

  return (
    <View style={[styles.commonView, commonViewStyle]}>
      {isSafeAreaView ? (
        <SafeAreaView edges={edges}>
          <ContentHeader {...otherProps} />
        </SafeAreaView>
      ) : (
        <ContentHeader {...otherProps} />
      )}
    </View>
  );
};

export default PanelHeader;

const stylesCreate = createStyles(_ => ({
  commonView: {
    width: '100%',
  },
}));
