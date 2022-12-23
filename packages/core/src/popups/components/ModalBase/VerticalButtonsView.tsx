import React, {FC} from 'react';

import View from '../../../basic/components/View/View';
import useStyles from '../../../styles/theme/hooks/useStyles';

import stylesCreate from './stylesCreate';

const VerticalButtonsView: FC = props => {
  const [styles] = useStyles(stylesCreate);
  const {children} = props;

  return <View style={styles.verticalButtonsView}>{children}</View>;
};

export default VerticalButtonsView;
