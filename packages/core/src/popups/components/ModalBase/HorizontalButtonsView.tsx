import {FC} from 'react';

import {IHorizontalButtonsView} from '../../types';
import useStyles from '../../../styles/hooks/useStyles';
import View from '../../../basic/components/View/View';
import Button from '../../../cta/components/Button/Button';
import {IButtonSize} from '../../../cta/components/Button/types';

import stylesCreate from './stylesCreate';

const HorizontalButtonsView: FC<IHorizontalButtonsView> = props => {
  const [styles] = useStyles(stylesCreate);
  const {
    typeLeft,
    onPressLeft,
    textLeft,
    typeRight,
    textRight,
    onPressRight,
    disabledRight,
    disabledLeft,
  } = props;

  return (
    <View style={styles.horizontalButtonsView}>
      <Button
        size={IButtonSize.fixed}
        style={styles.horizontalLeftButton}
        type={typeLeft}
        onPress={onPressLeft}
        text={textLeft}
        disabled={disabledLeft}
      />
      <Button
        size={IButtonSize.fixed}
        style={styles.horizontalRightButton}
        type={typeRight}
        onPress={onPressRight}
        text={textRight}
        disabled={disabledRight}
      />
    </View>
  );
};

export default HorizontalButtonsView;
