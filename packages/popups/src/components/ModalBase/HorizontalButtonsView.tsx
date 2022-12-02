import React, {FC} from 'react';
import {Button, IButtonSize} from '@npm/mobydick-cta';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import {IHorizontalButtonsView} from '../../types';

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
