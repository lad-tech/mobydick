import React, {FC} from 'react';
import {Button, ISize, ITypes} from '@npm/mobydick-cta';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';

interface IFixedView {
  onPress(): void;
  text: string;
  type?: ITypes;
}

const VerticalButtonsView: FC<IFixedView> = props => {
  const [styles] = useStyles(stylesCreate);
  const {children, ...otherProps} = props;
  return (
    <>
      <Button
        size={ISize.fixed}
        style={styles.verticalButton}
        {...otherProps}
      />
      {children}
    </>
  );
};

export default VerticalButtonsView;
