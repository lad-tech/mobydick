import {useStyles} from '@npm/mobydick-styles';
import React, {FC} from 'react';
import {IButtonTypes} from '@npm/mobydick-cta';
import {ISizeSpinner, Spinner} from '@npm/mobydick-progress';

import {ModalBase} from '../ModalBase';
import {IContentProps} from '../../types';

import stylesCreate from './stylesCreate';

interface IProps {
  title: string;
  descriptionText: string;
  buttonText?: string;
}

const ModalLoading: FC<IContentProps & IProps> = props => {
  const {onClose, title, descriptionText, buttonText} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <ModalBase
      overlayStyle={styles.overlayStyle}
      containerStyle={styles.container}
      {...props}>
      <Spinner size={ISizeSpinner.L} />
      <ModalBase.TextContent title={title} descriptionText={descriptionText} />

      <ModalBase.VerticalButtonsView>
        <ModalBase.VerticalButton
          type={IButtonTypes.secondary}
          onPress={onClose}
          text={buttonText || 'Отмена'}
        />
      </ModalBase.VerticalButtonsView>
    </ModalBase>
  );
};

export default ModalLoading;
