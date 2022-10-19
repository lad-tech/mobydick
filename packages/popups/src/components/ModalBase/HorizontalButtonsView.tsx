import React, {FC} from 'react';
import {Button, IButtonSize, IButtonTypes} from '@npm/mobydick-cta';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';

interface IFilledView {
  typeLeft: IButtonTypes;
  onPressLeft(): void;
  textLeft: string;

  typeRight: IButtonTypes;
  onPressRight(): void;
  textRight: string;
}

const HorizontalButtonsView: FC<IFilledView> = props => {
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
