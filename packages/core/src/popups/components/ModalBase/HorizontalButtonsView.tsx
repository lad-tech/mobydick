import React, {FC} from 'react';

import {IHorizontalButtonsView} from '../../types';
import useStyles from '../../../styles/theme/hooks/useStyles';
import View from '../../../basic/components/View/View';
import Button from '../../../cta/components/Button/Button';
import {IButtonSize} from '../../../cta/components/Button/types';

import stylesCreate from './stylesCreate';

const HorizontalButtonsView: FC<IHorizontalButtonsView> = props => {
  const [styles] = useStyles(stylesCreate);
  const {typeLeft, onPressLeft, textLeft, typeRight, textRight, onPressRight} =
    props;

  return (
    <View style={styles.horizontalButtonsView}>
      <Button
        size={IButtonSize.fixed}
        style={styles.horizontalLeftButton}
        type={typeLeft}
        onPress={onPressLeft}
        text={textLeft}
      />
      <Button
        size={IButtonSize.fixed}
        style={styles.horizontalRightButton}
        type={typeRight}
        onPress={onPressRight}
        text={textRight}
      />
    </View>
  );
};

export default HorizontalButtonsView;
