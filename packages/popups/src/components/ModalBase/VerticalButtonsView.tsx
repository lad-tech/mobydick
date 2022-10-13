import React, {FC} from 'react';
import {Button, ISize, ITypes} from '@npm/mobydick-cta';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';

interface IFixedView {
  textOne: string;
  typeOne: ITypes;
  onPressOne(): void;

  textTwo?: string;
  typeTwo?: ITypes;
  onPressTwo?(): void;
}

const VerticalButtonsView: FC<IFixedView> = props => {
  const [styles] = useStyles(stylesCreate);
  const {textOne, typeOne, onPressOne, textTwo, typeTwo, onPressTwo} = props;

  const isShowTwoButton = textTwo && typeTwo && onPressTwo;
  return (
    <>
      <Button
        size={ISize.fixed}
        style={styles.verticalButtonOne}
        text={textOne}
        type={typeOne}
        onPress={onPressOne}
      />
      {isShowTwoButton && (
        <Button
          size={ISize.fixed}
          style={styles.verticalButtonTwo}
          text={textTwo}
          type={typeTwo}
          onPress={onPressTwo}
        />
      )}
    </>
  );
};

export default VerticalButtonsView;
