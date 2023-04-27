import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import View from '../../../basic/components/View/View';
import {useStyles} from '../../../styles';
import {IPanelHeaderProps} from '../../types';

import ContentHeader from './components/ContentHeader';

const PanelHeader: FC<IPanelHeaderProps> = props => {
  const {
    commonViewStyle,
    isSafeAreaView = true,
    edges = ['top'],
    ...otherProps
  } = props;

  const [styles] = useStyles(createStyles);

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

const createStyles = () =>
  StyleSheet.create({
    commonView: {
      width: '100%',
    },
  });
