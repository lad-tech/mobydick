import {FC} from 'react';

import View from '../../../basic/components/View/View';
import useStyles from '../../../styles/hooks/useStyles';

import stylesCreate from './stylesCreate';

const VerticalButtonsView: FC<{
  children: React.ReactNode;
}> = props => {
  const [styles] = useStyles(stylesCreate);
  const {children} = props;

  return <View style={styles.verticalButtonsView}>{children}</View>;
};

export default VerticalButtonsView;
